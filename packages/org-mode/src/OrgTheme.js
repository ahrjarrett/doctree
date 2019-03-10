import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme } from "./defaultTheme";

const OrgThemeStyles = styled.div`
  .org__section {
    margin-bottom: 1rem;
    margin-left: 1rem;
    &:first-of-type {
      margin-left: 0;
    }
  }

  .org__section > * {
    /* IMPORTANT: Indent sibling after headline */
    margin-left: 1.25rem;
  }
  .org__section > :first-child {
    margin-left: 0;
  }
  .org__headline {
    position: relative;
    margin-bottom: 1rem;
    p:first-of-type {
      margin-left: 1.25rem;
    }
  }

  [class^="org__bullet-"] {
    display: flex;
    flex-direction: row;
    line-height: 1.2;
    font-size: 1rem;
    font-weight: 500;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
  }

  .org__bullet-1 {
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.headline1.color};
    background: ${({ theme }) => theme.headline1.bg};
    border-top: ${({ theme }) => theme.headline1.border};
    font-weight: 600;
    &::before {
      content: "◉";
      position: absolute;
      margin-top: -0.1rem;
    }
    p:first-of-type {
      margin-left: 1.875rem;
    }
  }

  .org__bullet-2 {
    color: ${({ theme }) => theme.headline2.color};
    background: ${({ theme }) => theme.headline2.bg};
    border-top: ${({ theme }) => theme.headline2.border};
    &::before {
      content: "○";
      position: absolute;
      margin-top: -0.1rem;
    }
  }

  .org__bullet-3 {
    color: ${({ theme }) => theme.headline3.color};
    background: ${({ theme }) => theme.headline3.bg};
    border-top: ${({ theme }) => theme.headline3.border};
    &::before {
      content: "✸";
      position: absolute;
      /* margin-top: -0.1rem; */
      /* transform: rotate(20deg); */
    }
  }

  .org__bullet-4 {
    color: ${({ theme }) => theme.headline4.color};
    background: ${({ theme }) => theme.headline4.bg};
    border-top: ${({ theme }) => theme.headline4.border};
    &::before {
      content: "✿";
      position: absolute;
      /* margin-top: -0.1rem; */
      /* transform: rotate(20deg); */
    }
  }

  .org__verbatim {
    text-decoration: underline;
    border: ${({ theme }) => theme.verbatim.border};
    background: ${({ theme }) => theme.verbatim.bg};
    color: ${({ theme }) => theme.verbatim.color};
    text-decoration-color: ${({ theme }) => theme.verbatim.textDecoration};
    &:hover {
      border: ${({ theme }) => theme.verbatimHover.border};
      background: ${({ theme }) => theme.verbatimHover.bg};
      color: ${({ theme }) => theme.verbatimHover.color};
      text-decoration-color: ${({ theme }) =>
        theme.verbatimHover.textDecoration};
    }
  }

  .org__code {
    color: ${({ theme }) => theme.code.color};
    background: ${({ theme }) => theme.code.bg};
  }
`;

export const SourceBlockStyles = styled.div`
  .org__src-block {
    max-width: 600px;
  }
  .org__src-lang {
    color: ${({ theme }) => theme.src.lang.color};
    background: ${({ theme }) => theme.src.lang.bg};
  }
  .org__src-body {
    color: ${({ theme }) => theme.src.body.color};
    background: ${({ theme }) => theme.src.body.bg};
  }
`;

export const OrgTheme = ({ children, theme = defaultTheme }) => (
  <ThemeProvider theme={theme}>
    <OrgThemeStyles>{children}</OrgThemeStyles>
  </ThemeProvider>
);
