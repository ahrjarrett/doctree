import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { themes } from "./themes";

const OrgThemeStyles = styled.div`
  .org__section {
    margin-bottom: 1rem;
    margin-left: 1rem;
    &:first-of-type {
      margin-left: 0;
    }
  }

  .org__headline {
    margin-bottom: 1rem;
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
      padding-right: 0.75rem;
      margin-top: -0.1rem;
    }
  }

  .org__bullet-2 {
    color: ${({ theme }) => theme.headline2.color};
    background: ${({ theme }) => theme.headline2.bg};
    border-top: ${({ theme }) => theme.headline2.border};
    &::before {
      content: "○";
      padding-right: 0.5rem;
      margin-top: -0.1rem;
    }
  }

  .org__bullet-3 {
    color: ${({ theme }) => theme.headline3.color};
    background: ${({ theme }) => theme.headline3.bg};
    border-top: ${({ theme }) => theme.headline3.border};
    &::before {
      content: "✸";
      margin-top: -0.1rem;
      padding-right: 0.5rem;
      /* transform: rotate(20deg); */
    }
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

export const OrgTheme = ({ children, theme }) => (
  <ThemeProvider theme={themes[theme]}>
    <OrgThemeStyles>{children}</OrgThemeStyles>
  </ThemeProvider>
);
