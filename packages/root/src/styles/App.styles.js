import styled from "styled-components";

export const AppStyles = styled.div`
  .theme-wrapper {
    max-width: 1000px;
    max-width: 700px;
    padding: 1em;
  }

  @media all and (min-width: 45rem) {
    .theme-wrapper {
      padding: 3em;
    }
  }
`;
