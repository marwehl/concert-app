import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { useAlert } from "react-alert";
import concert from "../images/concert.jpg";

LoginPage.propTypes = {
  handleLogin: PropTypes.func
};

export default function LoginPage({handleLogin}) {

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [isLoggedIn, setIsLoggedIn] = useState(false);
const alert = useAlert();

async function handleSubmit(event) {
  event.preventDefault()
  const form = event.target
     const formData = new FormData(form);
     let userdata = Object.fromEntries(formData);
    if (await handleLogin(userdata)) {
      alert.show(`Welcome, ${userdata.username}!`);
      setIsLoggedIn(true);
    } else {
      alert.show("Please try again with correct login data");
    }
}

   return isLoggedIn ? (
    <Redirect to="/home"/>
) : 
  ( <MainStyled>
      <StyledForm onSubmit={handleSubmit}>
        <ImageStyled src={concert}></ImageStyled>
        <LabelStyled>
          Username:
          <InputStyled
            name="username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          ></InputStyled>
        </LabelStyled>
        <LabelStyled>
          Password:
          <InputStyled
            type="password"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          ></InputStyled>
        </LabelStyled>
        <ButtonStyled
        >
          Login
        </ButtonStyled>
      </StyledForm>
    </MainStyled>
  );

}

const MainStyled = styled.main`
display: grid;
padding: 30px;
`
const ImageStyled = styled.img`
width: 100%;
margin-bottom: 30px;
border-radius: 10px;
`

const StyledForm = styled.form`
display: grid;
width: 300px;
`

const LabelStyled = styled.label`
margin-bottom: 20px;
  display: grid;
  gap: 1px;
  font-size: 1.3em;
  font-weight: bold;
`;

const InputStyled = styled.input`
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 1.2em;
  &: active {
    border-color: var(--orange);
  }
  &: focus {
    border-color: var(--orange);
  }
`;

  const ButtonStyled = styled.button`
    padding: 10px;
    background-color: var(--orange);
    font-size: 2em;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    box-shadow: 0 10px 10px gray;
    &:active {
      box-shadow: none;
    }
  `;