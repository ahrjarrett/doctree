import React from "react";
import styled from "styled-components";
import { OrgTheme, SourceBlockStyles } from "./OrgTheme";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.bg};
  li,
  .org__paragraph {
    color: ${({ theme }) => theme.color};
    margin-bottom: 1rem;
  }
  .org__list-item {
    margin-bottom: 0rem;
  }
  font-family: ${props => props.theme.font};
  font-weight: 400;
  line-height: 1.25;
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

  b,
  strong {
    font-weight: 700;
  }

  i,
  em {
    font-style: italic;
  }
  span.org__underline {
    text-decoration: underline;
  }
  span.org__strike-through {
    text-decoration: line-through;
  }

  & ::selection {
    background: ${({ theme }) => theme.selection};
  }

  .org__meta {
    margin-bottom: 2.5rem;
  }
`;

export const Meta = styled.div`
  .org__meta-key {
    color: ${({ theme }) => theme.meta.key.color};
    background: ${({ theme }) => theme.meta.key.bg};
    display: inline-block;
  }
  .org__meta-value {
    color: ${({ theme }) => theme.meta.value.color};
    background: ${({ theme }) => theme.meta.value.bg};
    padding-left: 0.75rem;
  }

  &.org__meta-title {
    display: flex;
    line-height: 1.125;
    .org__meta-key {
      display: flex;
      align-items: flex-end;
      padding-bottom: 0.1875rem;
    }
    .org__meta-value {
      color: ${({ theme }) => theme.meta.title.color};
      font-size: ${({ theme }) => theme.meta.title.fontSize};
      font-weight: 600;
    }
  }
`;

const Tree = styled.ul`
  padding-inline-start: 0;
  margin-block-start: 0rem;
  margin-block-end: 0rem;
  & > .org__section {
    margin-left: 0;
  }
`;

export const Outline = ({ children, theme }) => (
  <OrgTheme theme={theme}>
    <Wrapper className="Wrapper">
      <Tree className="Tree">{children}</Tree>
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
  margin-bottom: 1.25rem;
`;

const StyledListItem = styled.li`
  position: relative;
  margin-left: 1.125rem;
  &::before {
    content: "${props => props.char}";
    position: absolute;
    left: -1.125rem;
  }
  &.org__list_item-char-n {
    margin-left: 1.8125rem;
    &::before {
      left: -1.8125rem;
    }
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
    className={`org__list-item org__list_item-char-${char === "-" ? "-" : "n"}`}
  >
    {children}
  </StyledListItem>
);

// Aliases:
export const HL = Headline;
export const Src = SourceBlock;
