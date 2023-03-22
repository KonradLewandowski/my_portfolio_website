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
  
  display: flex;
  flex-direction: column;
  
  h3 {
    text-align: center;
    margin-bottom: ${variable.spacings["32"]};
  }

  p {
    color: ${variable.color.light};
  }
  
  .icon {
    margin-top: 6px;
    color: ${variable.color.primary};
  }
  
  article {
    text-align: left;
    display: grid;
    grid-template-columns: 10% 60%;
    gap: ${variable.gap["16"]};
    justify-content: right;
  }

  .dropdown {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${variable.spacings["32"]};
    margin-top: 0;
  }
  
  .arrow{
    width: 100%;
    margin-top: auto;
    display: none;
  }

 @media screen and  (max-width: ${device.lgMobile}) {
   flex-basis:${variable.container.medium};
   min-height: unset;
   
   :hover{
      border-color: ${variable.color.white};
      box-shadow: ${variable.shadow.basic} ${variable.color.white}, inset ${variable.shadow.basic} ${variable.color.white};
      background: transparent;
      cursor: pointer;
   }
   
   .article{
     padding: ${variable.spacings["16"]};
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
     display: block;
   }
  }
   
  @media (max-width: ${device.mobile}) {
    flex-basis:100%;
  }
`;
