import styled from "styled-components";
import { variable } from "../../../assets/variables/global.styles";

export const OptionsContainer = styled.div`
  display: inherit;
  flex-direction: column;
  gap: 1.2rem;

  .option {
    background-color: ${variable.color.backgroundVariant};
    padding: 1.2rem;
    text-align: center;
    border: 1px solid transparent;
    transition: ${variable.effect.transition};
    :hover {
      background: transparent;
      border-color: ${variable.color.white};
    }
    .icon {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    a {
      margin-top: 0.7rem;
      display: inline;
      font-size: 0.8rem;
    }
  }
`;
