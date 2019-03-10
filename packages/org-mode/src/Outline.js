import React from "react";
import styled from "styled-components";
import { OrgTheme, SourceBlockStyles } from "./OrgTheme";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.bg};
  li,
  .org__paragraph {
    color: ${({ theme }) => theme.color};
  }
  font-family: ${props => props.theme.font};
  font-weight: 400;
  line-height: 1.2rem;
  li {
    list-style: none;
  }
  ol,
  ul {
    padding-left: 0;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  & ::selection {
    background: ${({ theme }) => theme.selection};
  }

  .org__headline {
    /* IMPORTANT: Indent sibling after headline */
    & + * {
      margin-left: 1rem;
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
`;

const Tree = styled.ul`
  padding-inline-start: 0;
  margin-block-start: 0rem;
  margin-block-end: 0rem;
`;

export const Outline = ({ children, theme }) => (
  <OrgTheme theme={theme}>
    <Wrapper>
      <Tree>{children}</Tree>
    </Wrapper>
  </OrgTheme>
);

export const Headline = ({ children, level }) => (
  <div className={`org__bullet-${level} org__headline`}>
    <p className="org__headline-text">{children}</p>
  </div>
);

export const SourceBlock = ({ children, lang }) => (
  <SourceBlockStyles>
    <div className="org__src-block">
      {lang && (
        <p className="org__src-lang">
          <span>{lang}</span>
        </p>
      )}
      <p className="org__src-body">{children}</p>
    </div>
  </SourceBlockStyles>
);

const Link = styled.a`
  &.org__link {
    color: ${({ theme }) => theme.link.color};
    background: ${({ theme }) => theme.link.bg};
    text-decoration-color: ${({ theme }) => theme.link.textDecoration};
    &:hover {
      color: ${({ theme }) => theme.linkHover.color};
      background: ${({ theme }) => theme.linkHover.bg};
      text-decoration-color: ${({ theme }) => theme.linkHover.textDecoration};
    }
  }
`;

export const OrgLink = ({ children, to, newTab }) => (
  <React.Fragment>
    {newTab && (
      <Link
        className="org__link org__link-external"
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    )}
    {!newTab && (
      <Link className="org__link org__link-internal" href={to}>
        {children}
      </Link>
    )}
  </React.Fragment>
);

const StyledList = styled.div`
  margin-bottom: 1rem;
`;

const StyledListItem = styled.li`
  &::before {
    content: "${props => props.char}";
  }
`;

export const List = ({ children, ordered = false }) => (
  <StyledList className="org__list">
    {ordered ? (
      <ol className="org__list-ordered">{children}</ol>
    ) : (
      <ul className="org__list-unordered">{children}</ul>
    )}
  </StyledList>
);

export const ListItem = ({ children, char = "-" }) => (
  <StyledListItem
    char={typeof char === "number" ? `${char}. ` : `${char} `}
    className={`org__list-item org__list_item-char-${char}`}
  >
    {children}
  </StyledListItem>
);

// Aliases:
export const HL = Headline;
export const Src = SourceBlock;
