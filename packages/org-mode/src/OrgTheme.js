import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { themes } from "./themes";

const OrgThemeStyles = styled.div`
  li[class^="org-bullet-"] {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    .org-headline {
      font-weight: 500;
    }
    line-height: 1.2;
  }

  li.org-bullet-1 {
    font-size: 1.5rem;
    .org-headline {
      font-weight: 600;
      color: ${({ theme }) => theme.headline1.color};
      background: ${({ theme }) => theme.headline1.bg};
      border-top: ${({ theme }) => theme.headline1.border};
      padding-top: 0.15rem;
      padding-bottom: 0.15rem;
    }
    .org-headline::before {
      content: "◉ ";
      padding-right: 0.75rem;
      margin-top: -0.15rem;
    }
  }

  li.org-bullet-2 {
    .org-headline {
      color: ${({ theme }) => theme.headline2.color};
      background: ${({ theme }) => theme.headline2.bg};
      border-top: ${({ theme }) => theme.headline2.border};
      padding-top: 0.1rem;
      padding-bottom: 0.1rem;
    }
  }

  li.org-bullet-3 {
    .org-headline {
      color: ${({ theme }) => theme.headline3.color};
      background: ${({ theme }) => theme.headline3.bg};
      border-top: ${({ theme }) => theme.headline3.border};
      padding-top: 0.1rem;
      padding-bottom: 0.1rem;
    }
  }
`;

export const OrgTheme = ({ children, theme }) => (
  <ThemeProvider theme={themes[theme]}>
    <OrgThemeStyles>{children}</OrgThemeStyles>
  </ThemeProvider>
);

export const SourceBlockStyles = styled.div`
  .org-src-block {
    max-width: 600px;
  }
  .org-src-lang {
    color: ${({ theme }) => theme.src.lang.color};
    background: ${({ theme }) => theme.src.lang.bg};
  }
  .org-src-body {
    color: ${({ theme }) => theme.src.body.color};
    background: ${({ theme }) => theme.src.body.bg};
  }
`;
