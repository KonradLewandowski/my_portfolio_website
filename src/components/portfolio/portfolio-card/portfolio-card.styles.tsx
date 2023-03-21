import styled from "styled-components";

import { variable } from "../../../assets/variables/global.styles";
import { device } from "../../../assets/variables/device.styles";

export const PortfolioCardContainer = styled.div`
  flex-basis: calc(33% -  ${variable.spacings["32"]}) ;
  
  position: relative;
  border: 1px solid transparent;
  border-radius: ${variable.border.small};
  background: ${variable.color.backgroundVariant};
  transition: ${variable.effect.transition};
  padding: ${variable.spacings["16"]} 0;

  .video-box:hover {
    .title{
      transition: opacity ${variable.effect.transition}; 
      opacity: 0;
    }
    cursor: pointer;
  }

  .title {
    position: absolute;
    top: ${variable.spacings["32"]};
    left: 50%;
    transform: translateX(-50%);

    h3 {
      white-space: nowrap;
      color: ${variable.color.white};
      padding: 0 ${variable.spacings["8"]};
      border: solid white;
      border-width: 1px 0 1px 0;
    }

    p {
      font-size:${variable.fontSize["10"]};
      color: ${variable.color.light};
    }

    .technologies {
      display: flex;
      justify-content: center;
      gap: ${variable.gap["16"]};
      padding-top: ${variable.spacings["16"]};
      color: ${variable.color.light};
      font-size: ${variable.fontSize["24"]};

      .rotate {
        animation: rotation 2.5s infinite linear;
      }

      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    }
    
  }

  video {
    opacity: 0.2;
    object-fit: cover;
    width: 100%;
    min-height: 170px;
    transition: transform ${variable.effect.transition},
      opacity ${variable.effect.transition}, 
      border-radius ${variable.effect.transition};
    
    :hover {
      border-radius: ${variable.border.small};
      transform: scale(1.05);
      opacity: 1;
    }
  }

   .buttons-box {
    display: flex;
    justify-content: center;
    gap: ${variable.gap["16"]};
    padding: ${variable.spacings["8"]};
  }
`;
