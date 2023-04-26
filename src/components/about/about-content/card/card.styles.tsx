import styled from "styled-components";

import { variable } from "../../../../assets/variables/global.styles";
import {device} from "../../../../assets/variables/device.styles";

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: ${variable.color.backgroundVariant};
  border: 1px solid transparent;
  border-radius: ${variable.border.small};
  padding: ${variable.spacings["16"]};
  transition: ${variable.effect.transition};
  
  @media  (max-width: ${device.mobile}) {
    flex-basis: 100%;
    height: auto;
    overflow: hidden;
  }
  
  :hover {
    border-color: ${variable.color.white};
    box-shadow: ${variable.shadow.basic} ${variable.color.white}, inset ${variable.shadow.basic} ${variable.color.white};
    background: transparent;
    cursor: pointer;
  }

  .icon {
    color: ${variable.color.primary};
    font-size: ${variable.fontSize["24"]};
    margin-bottom: ${variable.spacings["16"]};
  }
  h3 {
    font-size: ${variable.fontSize["16"]};
  }

  .description {
    font-size: ${variable.fontSize["12"]};
    color: ${variable.color.light};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: ${variable.spacings["8"]};
  }
  
  .dropdown{
    max-height: 0;
    transition: max-height ${variable.effect.transition} ;
    overflow: hidden;
    
    &.active{
      max-height: 450px;
    }
  }

  .arrow{
    margin: ${variable.spacings["8"]};
  }
  
  @media (min-width: ${device.mobile}) {
    .arrow, .dropdown{
      display: none;
    }
  }
`;
