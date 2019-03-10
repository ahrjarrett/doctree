import { createGlobalStyle } from "styled-components";
import { fontDeclarations, fontMixin } from "./mixins";

export const GlobalStyles = createGlobalStyle`
  ${fontDeclarations};

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${fontMixin};

`;
