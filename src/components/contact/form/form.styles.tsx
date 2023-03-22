import styled from "styled-components";

import { variable } from "../../../assets/variables/global.styles";
import {device} from "../../../assets/variables/device.styles";

export const FormContainer = styled.form`
  position: relative;
  max-width: ${variable.container["700"]};
  display: flex;
  flex-direction: column;
  gap: ${variable.gap["16"]};
  padding: ${variable.spacings["32"]};
  margin: 0 auto;

  .ok,
  .error {
    font-size: ${variable.fontSize["24"]};
    position: absolute;
    left: calc(45%);
    transform: translateX(-50%);
    top: 25%;
  }

  :is(.ok, .error) svg{
    font-size: ${variable.fontSize["48"]};
  }
  
  .ok svg {
    color: #00ff00;
  }

  .error svg {
    color: #ff0000;
  }
  @media (max-width: ${device.mobile}){
    button{
      margin: auto;
    }
  }
`;

export const InputContainer = styled.input`
  padding:${variable.spacings["16"]};
  background: transparent;
  border: 2px solid ${variable.color.primaryVariant};
  resize: none;
  color: ${variable.color.white};
`;

export const TextAreaContainer = styled.textarea`
  padding: ${variable.spacings["16"]};
  background: transparent;
  border: 2px solid ${variable.color.primaryVariant};
  resize: none;
  color: ${variable.color.white};
`;
