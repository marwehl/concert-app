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

    @media (min-width: 900px) {
      width: 375px;
      height: 667px;
      border: 30px solid black;
      border-width: 60px 20px;
      border-radius: 20px;
      box-shadow: 30px 40px 30px #2264;
      margin: 40px auto;
    }
  }
  `;