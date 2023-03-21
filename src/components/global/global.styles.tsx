import { createGlobalStyle } from "styled-components";

import background from "../../uploads/images/pngegg.png";

import { variable } from "../../assets/variables/global.styles";

const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

    * {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
    }
    
    html {
      scroll-behavior: smooth;
    }
    
    ::-webkit-scrollbar {
      display: none;
    }
    
    body {
      max-width: 100dvw;
      overflow-x: hidden;
      font-family: "Poppins", sans-serif;
      background:  ${variable.color.background};
      color: ${variable.color.white};
      line-height: 1.7;
      background-image: url(${background}) ;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      background-blend-mode: color-dodge;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5 {
      font-weight: 500;
    }
    
    h1 {
      font-size: 2.5rem;
    }
    
    a {
      color: ${variable.color.primary};
      transition: ${variable.effect.transition};
    }
    
    a:hover {
      color: ${variable.color.white};
    }
    
    img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
    
`;

export default GlobalStyle;
