import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import './fonts.css';

const GlobalStyle = createGlobalStyle`
  ${reset};
  html {
    font-size: 100%; 
    font-family: 'Inter';
  }
  body {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    box-sizing: border-box;
  }
  * {
    box-sizing: border-box;
  }
`;
export default GlobalStyle;
