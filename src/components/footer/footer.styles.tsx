import styled from "styled-components";

import { variable } from "../../assets/variables/global.styles";

import { device } from "../../assets/variables/device.styles";

export const FooterContainer = styled.div`
  padding: 1rem 1rem 3rem;
  width: 100%;
  padding-bottom: 10vh;
  background-color: ${variable.color.backgoundVariant};
  text-align: center;

  .name {
    font-size: 1.2rem;
    margin-top: 2rem;
  }

  .socials {
    font-size: 2rem;
    a {
      color: #3b5998;
      :hover {
        color: ${variable.color.white};
      }
    }
  }

  .rights {
    color: ${variable.color.light};
    margin-bottom: 2rem;
    font-size: 0.7rem;
  }
`;

export const LinksContainer = styled.div`
  margin: 0 1rem 1rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  a {
    font-size: 1rem;
    cursor: pointer;
    @media screen and (max-width: ${device.tablet}) {
      font-size: 0.7rem;
    }
  }
`;
