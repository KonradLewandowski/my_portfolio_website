import styled from "styled-components";
import { variable } from "../../../assets/variables/global.styles";
import {device} from "../../../assets/variables/device.styles";

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: ${variable.spacings["32"]};
  
  .option {
    flex-basis: calc(33% - ${variable.gap["16"]});
    background-color: ${variable.color.backgroundVariant};
    padding: ${variable.spacings["32"]};
    border-radius: ${variable.border.small};
    transition: ${variable.effect.transition};

    display: flex;
    flex-direction: column;
    align-items: center;
    
    &__inner-box{
      display: flex;
      flex-direction: column;
      padding-top: ${variable.spacings["16"]};
    }

    &.hide-desktop {
      display: none;
    }

    .icon {
      font-size: ${variable.fontSize["24"]};
    }

    a {
      margin-top: auto;
      font-size: ${variable.fontSize["16"]};
    }

    p {
      color: ${variable.color.light};
      font-size: ${variable.fontSize["12"]};
    }
  }
  
    @media (max-width: ${device.lgMobile}) {
      flex-wrap: wrap;
      gap: ${variable.gap["16"]};
      .option {
        flex-basis: calc(50% - ${variable.gap["16"]});
        padding: ${variable.spacings["16"]};
          &.hide-desktop {
            display: flex;
        }
      }
    }
  @media (max-width: ${device.mobile}) {
    .option{
      flex-basis: 300px;
      flex-direction: row;
      justify-content: center;
      gap: 32px;
    }
  }
  
`;
