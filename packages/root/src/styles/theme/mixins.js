import { css } from "styled-components";

export const fontDeclarations = css`
  /* No italic for Fira Code */
  @font-face {
    font-family: "Fira Code";
    src: local("Fira Code Bold"), local("FiraCode-Bold"),
      url("/fonts/FiraCode-Bold.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Fira Code";
    src: local("Fira Code Medium"), local("FiraCode-Medium"),
      url("/fonts/FiraCode-Medium.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Fira Code";
    src: local("Fira Code Regular"), local("FiraCode-Regular"),
      url("/fonts/FiraCode-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Fira Code";
    src: local("Fira Code Light"), local("FiraCode-Light"),
      url("/fonts/FiraCode-Light.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
  }
`;

export const fontMixin = css`
  html {
    font-family: Fira Code, monospace;
    /* @SET: 1rem === 16px */
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
`;
