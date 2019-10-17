import React, { useState } from 'react'
import styled from "styled-components/macro";


export default function LoginPage({handleLogin}) {

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

function handleSubmit(event) {
  event.preventDefault()
     const formData = new FormData(event.target);
     let userdata = Object.fromEntries(formData);
     handleLogin(userdata)
}

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          name="username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        ></input>
      </label>
      <label>
        Password:
        <input
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        ></input>
      </label>
      <button>Login</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
height: 400px;
width: 300px;
`