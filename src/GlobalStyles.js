import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #eee;
    font-family: Helvetica;
    color: #6D7278
  }

  input, button {
    font-size: 1em;
  }
  `