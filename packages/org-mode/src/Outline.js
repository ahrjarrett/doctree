import React from "react";
import styled from "styled-components";
import { OrgTheme } from "./OrgTheme";

const Wrapper = styled.div`
  font-family: ${props => props.theme.font};
  font-weight: 400;
  line-height: 1.2rem;
  li {
    list-style: none;
  }
  ul {
    padding-left: 0;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .org-headline {
    display: flex;
  }

  .org-headline-body {
    margin-left: 1rem;
  }

  li.org-bullet-1 .org-headline::before {
    content: "◉ ";
    padding-right: 0.75rem;
    margin-top: -0.15rem;
  }
  li.org-bullet-1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  li.org-bullet-1 ~ p {
    /* margin-left: 1rem; */
  }

  li.org-bullet-2 .org-headline::before {
    content: "○ ";
    padding-right: 0.5rem;
    margin-top: -0.1rem;
  }
  li.org-bullet-2 {
    font-weight: 500;
  }
  li.org-bullet-2 ~ p {
    /* margin-left: 2rem; */
  }

  li.org-bullet-3 .org-headline::before {
    content: "✸ ";
    margin-top: -0.1rem;
    padding-right: 0.5rem;
    /* transform: rotate(20deg); */
  }
  li.org-bullet-3 {
    /* margin-left: 2rem; */
  }
  li.org-bullet-3 ~ p {
    /* margin-left: 3rem; */
  }
`;

const Tree = styled.ul`
  padding-inline-start: 0;
  margin-block-start: 0rem;
  margin-block-end: 0rem;
`;

const SourceBlockStyles = styled.div`
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

export const Outline = ({ children, theme }) => (
  <OrgTheme theme={theme}>
    <Wrapper>
      <Tree>{children}</Tree>
    </Wrapper>
  </OrgTheme>
);

export const Headline = ({ children, level, headline }) => (
  <li
    className={`org-bullet-${level}`}
    style={{ marginLeft: `${level - 1}rem` }}
  >
    <div className="org-headline">
      <p>{headline}</p>
    </div>
    {children && <div className="org-headline-body">{children}</div>}
  </li>
);

export const SourceBlock = ({ children, lang }) => (
  <SourceBlockStyles>
    <div className="org-src-block">
      {lang && (
        <p className="org-src-lang">
          <span>{lang}</span>
        </p>
      )}
      <p className="org-src-body">{children}</p>
    </div>
  </SourceBlockStyles>
);

// Aliases:
export const HL = Headline;
export const Src = SourceBlock;
