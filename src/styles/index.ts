import { createGlobalStyle } from 'styled-components'
import colors from './colors'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  cellPhone: '480px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Ancizar Sans", sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background: ${colors.secondColor};
    color: ${colors.fifthColor};
    /* padding: 20px; */
  }

  button {
    cursor: pointer;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.desktop} ) {
    max-width: 80%;
  }

`
