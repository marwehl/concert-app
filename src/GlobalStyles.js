import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root{
    --orange: #f39b4f;
  }

  body {
    margin: 0;
    background: white;
    font-family: Helvetica;
  }
  `;