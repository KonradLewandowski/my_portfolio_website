import styled from "styled-components";
import { variable } from "../variable/variable.styles";

export const ContactContainer = styled.div`
  margin: 0 auto;
  max-width: 80vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  padding-bottom: 5rem;

  .options {
    display: inherit;
    flex-direction: column;
    gap: 1.2rem;

    .option {
      background-color: ${variable.color.backgoundVariant};
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
  }

  form {
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  input,
  textarea {
    width: 100%;
    padding: 1.5rem;
    background: transparent;
    border: 2px solid ${variable.color.primaryVariant};
    resize: none;
    color: ${variable.color.white};
  }
`;
