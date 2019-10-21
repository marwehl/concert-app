import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import styled from "styled-components/macro";


export default function LoginPage({handleLogin}) {

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [isLoggedIn, setIsLoggedIn] = useState(false);

function handleSubmit(event) {
  event.preventDefault()
     const formData = new FormData(event.target);
     let userdata = Object.fromEntries(formData);
     handleLogin(userdata)
     //setIsLoggedIn(true);
}

  return isLoggedIn 
    ? (
    <Redirect to="/home" />
  ) : (
    <MainStyled>
    <StyledForm onSubmit={handleSubmit}>
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
      <ButtonStyled>Login</ButtonStyled>
    </StyledForm>
    </MainStyled>
  )
}

const MainStyled = styled.main`
padding: 30px;
`

const StyledForm = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
height: 400px;
width: 300px;
`

const LabelStyled = styled.label`
  display: grid;
  gap: 0.5px;
`;

const InputStyled = styled.input`
  padding: 7px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 1.1em;
  &: active {
    border-color: #e87613;
  }
  &: focus {
    border-color: #e87613;
  }
  `

  const ButtonStyled = styled.button`
    height: 48px;
    align-self: center;
    background-color: #e87613;
    font-size: 2em;
    border: none;
    border-radius: 10px;
    box-shadow: 0 10px 10px gray;
    &:active {
      box-shadow: none;
    }
  `;