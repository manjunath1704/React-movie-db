import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
  h1 {
    color: var(--medGrey);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2rem;
`;
