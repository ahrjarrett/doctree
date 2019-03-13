import styled from "styled-components";

export const AppStyles = styled.div`
  background: ${({ theme }) => theme.bg};
  .orgmode-wrapper {
    position: relative;
    max-width: 1000px;
    width: calc(700px + 1rem);
    padding: 0 0 2.5rem 0;
    border-top: 1rem solid ${({ theme }) => theme.gutter};
    border-left: 1rem solid ${({ theme }) => theme.gutter};
    border-right: 1rem solid ${({ theme }) => theme.gutter};
    @media all and (min-width: 45rem) {
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a.theme-toggler {
    text-decoration: underline;
    border: ${({ theme }) => theme.highlight.border};
    background: ${({ theme }) => theme.code.bg};
    color: ${({ theme }) => theme.code.color};
    text-decoration-color: ${({ theme }) => theme.code.textDecoration};
    &:hover {
      border: ${({ theme }) => theme.highlightHover.border};
      background: ${({ theme }) => theme.verbatimHover.bg};
      color: ${({ theme }) => theme.verbatimHover.color};
      text-decoration-color: ${({ theme }) =>
        theme.verbatimHover.textDecoration};
    }
  }

  .home-copyright {
    text-align: right;
    padding-right: 2em;
    color: ${({ theme }) => theme.color};
    .copyright-symbol {
      font-weight: 500;
      font-size: 1.125rem;
    }
  }

  .emacs-footer {
    position: fixed;
    bottom: 0;
    left: 1rem;
    width: calc(700px + 1rem);
  }

  .command-line {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.color};
  }

  .mode-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.25rem;
    background: ${({ theme }) => theme.modeLine.bg};
    border-top: ${({ theme }) => theme.modeLine.border};
    border-bottom: ${({ theme }) => theme.modeLine.border};
    color: ${({ theme }) => theme.modeLine.modes};
    .mode-line-left {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 0.25rem;
      & > div {
        margin-right: 1rem;
      }
    }
    .mode-line-right {
      margin-right: 1rem;
    }

    span {
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.modeLine.hover};
      }
    }

    p {
      margin: 0;
    }

    .mode-line-indicator {
      border-left: 1px solid ${({ theme }) => theme.modeLine.indicatorBorder};
      border-right: 1px solid ${({ theme }) => theme.modeLine.indicatorBorder};
      background: ${({ theme }) => theme.modeLine.indicator};
      height: 0.875rem;
      width: 0.875rem;
    }
    .mode-line-filename {
      color: ${({ theme }) => theme.modeLine.context};
      font-weight: 600;
    }

    div.theme-toggler {
      a {
        text-decoration: underline;
        background: transparent;
        color: ${({ theme }) => theme.modeLine.hover};
        font-weight: 600;
        text-decoration-color: ${({ theme }) => theme.code.textDecoration};
        &:hover {
          /* border: 1px solid ${({ theme }) => theme.modeLine.hover}; */
          border: ${({ theme }) => theme.highlightHover.border};
          background: ${({ theme }) => theme.verbatimHover.bg};
          color: ${({ theme }) => theme.verbatimHover.color};
          text-decoration-color: ${({ theme }) =>
            theme.verbatimHover.textDecoration};
        }
      }
    }
  }
`;
