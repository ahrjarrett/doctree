import React from "react";
import styled from "styled-components";
import {
  OrgTheme,
  SourceBlockStyles,
  StyledList,
  StyledListItem,
  Meta,
  Tree,
  StyledLink,
  Wrapper
} from "./Org.styles";

export const Outline = ({ children, theme }) => (
  <OrgTheme theme={theme}>
    <Wrapper className="Wrapper">
      <Tree className="Tree">{children}</Tree>
    </Wrapper>
  </OrgTheme>
);

export const HL = ({ children, level, open }) => (
  <div className={`org__bullet-${level} org__headline`}>
    <p className="org__headline-text">
      {children}{" "}
      <span
        className="org__headline-open-icon"
        style={{ transform: open ? "rotate(90deg)" : "unset" }}
      >
        ►
      </span>
    </p>
  </div>
);

export const Src = ({ children, lang }) => (
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

export const OrgLink = ({ children, to, newTab }) => (
  <React.Fragment>
    {newTab && (
      <StyledLink
        className="org__link org__link-external"
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </StyledLink>
    )}
    {!newTab && (
      <StyledLink className="org__link org__link-internal" href={to}>
        {children}
      </StyledLink>
    )}
  </React.Fragment>
);

export const OrgList = ({ children, ordered = false }) => (
  <StyledList className="org__list">
    {ordered ? (
      <ol className="org__list-ordered">{children}</ol>
    ) : (
      <ul className="org__list-unordered">{children}</ul>
    )}
  </StyledList>
);

export const OrgListItem = ({ children, char = "-" }) => (
  <StyledListItem
    char={typeof char === "number" ? `${char}. ` : `${char} `}
    className={`org__list-item org__list_item-char-${char === "-" ? "-" : "n"}`}
  >
    {children}
  </StyledListItem>
);
