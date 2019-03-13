import { css } from "styled-components";

export const fontDeclarations = css`
  /* No italic for Fira Code */
  @font-face {
    font-family: "Fira Code";
    src: url("/fonts/FiraCode-Bold.otf") format("otf");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Fira Code";
    src: url("/fonts/FiraCode-Medium.otf") format("otf");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Fira Code";
    src: url("/fonts/FiraCode-Retina.otf") format("otf");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Fira Code";
    src: url("/fonts/FiraCode-Light.otf") format("otf");
    font-weight: 300;
    font-style: normal;
  }
`;

export const fontMixin = css`
  html {
    font-family: Fira Code Bold, monospace;
    /* @SET: 1rem === 16px */
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
`;
