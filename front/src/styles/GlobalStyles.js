import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #18c0c1;
    --color-secondary: #546a83;
    --color-shadow:rgba(84, 106, 131, 0.49);
    --color-background: #F2F5FA;
    --color-white: #ffffff;
    --color-danger:rgb(255, 0, 0);
  }

  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    margin: 0;
    font-family: "Poppins", sans-serif;
    background-color: var(--color-background);
    padding-inline: 20px;
    padding-block: 20px 120px;
    min-height: 100dvh;
  }

  body.scroll-page {
    max-height: 100dvh;
    overflow: hidden;
  }

  body.auth-page {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 0;
  }

  a{
    text-decoration: none;
    color: inherit;
    width: 100%;
    height: 100%;
    display: block;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }  

  .active {
    border-bottom: 2px solid black; 
  }
`;
