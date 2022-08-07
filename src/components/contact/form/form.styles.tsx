import styled from "styled-components";

import { variable } from "../../variable/variable.styles";

export const FormContainer = styled.form`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .ok,
  .error {
    font-size: 1rem;
    position: absolute;
    left: calc(45%);
    transform: translateX(-50%);
    top: 25%;
  }

  .ok svg {
    color: #00ff00;
    font-size: 2rem;
  }

  .error svg {
    color: #ff0000;
    font-size: 2rem;
  }
`;

export const InputContainer = styled.input`
  width: 100%;
  padding: 1.5rem;
  background: transparent;
  border: 2px solid ${variable.color.primaryVariant};
  resize: none;
  color: ${variable.color.white};
`;

export const TextAreaContainer = styled.textarea`
  width: 100%;
  padding: 1.5rem;
  background: transparent;
  border: 2px solid ${variable.color.primaryVariant};
  resize: none;
  color: ${variable.color.white};
`;
