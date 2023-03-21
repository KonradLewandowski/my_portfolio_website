import styled from "styled-components";

import { variable } from "../../../assets/variables/global.styles";
import { device } from "../../../assets/variables/device.styles";

export const FamiliarTechnologiesCardContainer = styled.div`
  flex-basis: calc(50% - ${variable.gap["32"]} / 2);
  min-height: 400px;
  background: ${variable.color.backgroundVariant};
  border: 1px solid transparent;
  border-radius: ${variable.border.small};
  padding: ${variable.spacings["32"]};
  transition: ${variable.effect.transition};
  
  h3 {
    text-align: center;
    margin-bottom: ${variable.spacings["32"]};
  }

  p {
    color: ${variable.color.light};
  }

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 0;
  }

  article {
    display: grid;
    grid-template-columns: 10% 60%;
    gap: ${variable.gap["16"]};
    justify-content: center;
  }

  .icon {
    margin-top: 6px;
    color: ${variable.color.primary};
  }

  @media (min-width: ${device.lgMobile}) {
    .arrow {
      display: none;
    }
  }

 @media (max-width: ${device.lgMobile}) {
   flex-basis:400px;
   min-height: unset;
   
   :hover{
      border-color: ${variable.color.white};
      box-shadow: ${variable.shadow.basic} ${variable.color.white}, inset ${variable.shadow.basic} ${variable.color.white};
      background: transparent;
      cursor: pointer;
   }
   
   .dropdown{
     max-height: 0px;
     transition: max-height ${variable.effect.transition} ;
     overflow: hidden;

     &.active{
       max-height: 450px;
     }

     .arrow{
       margin: ${variable.spacings["8"]};
     }
  }
  
  @media (max-width: ${device.mobile}) {
    flex-basis:100%;
  }
 
`;
