import styled from "styled-components";

export const AppStyles = styled.div`
  background: ${({ theme }) => theme.bg};
  .orgmode-wrapper {
    max-width: 1000px;
    max-width: 700px;
    padding: 1em;
    @media all and (min-width: 45rem) {
      padding: 3em;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a.theme-toggler {
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

  .home-copyright {
    text-align: right;
    padding-right: 2em;
    color: ${({ theme }) => theme.color};
  }
`;
