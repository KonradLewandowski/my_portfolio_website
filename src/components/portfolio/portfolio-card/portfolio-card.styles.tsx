import styled, { keyframes, css } from "styled-components";

import { variable } from "../../../assets/variables/global.styles";
import { device } from "../../../assets/variables/device.styles";

interface IContainerProps {
  isWithinNDays: boolean;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const PortfolioCardContainer = styled.div<IContainerProps>`
  flex-basis: calc(33% - ${variable.spacings["32"]});
  position: relative;
  border: 1px solid transparent;
  border-radius: ${variable.border.small};
  background: ${variable.color.backgroundVariant};
  transition: ${variable.effect.transition};
  padding: ${variable.spacings["16"]} 0;

  height: 350px;
  .new {
    display: none;
    ${(props) =>
      props.isWithinNDays &&
      css`
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
      `};

    img {
      padding: ${variable.spacings["8"]};
      width: 75px;
      height: 75px;
    }
  }
  @media (max-width: ${device.tablet}) {
    flex-basis: calc(50% - ${variable.spacings["32"]} / 2);
  }

  @media (max-width: ${device.lgMobile}) {
    flex-basis: ${variable.container.medium};
  }

  @media (max-width: ${device.mobile}) {
    flex-basis: 100%;
  }

  .video-box {
    position: relative;
    &:hover {
      .title {
        transition: opacity ${variable.effect.transition};
        opacity: 0;
      }

      cursor: pointer;
    }
  }

  .title {
    position: absolute;
    top: 30%;
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
      font-size: ${variable.fontSize["10"]};
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
        animation: ${rotate} 2.5s infinite linear;
      }
    }
  }

  video {
    opacity: 0.2;
    object-fit: cover;
    width: 100%;
    height: 200px;
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
    justify-content: space-around;
    align-items: center;
    margin-top: ${variable.spacings["16"]};
    padding: ${variable.spacings["8"]};

    &__github {
      display: flex;
      align-items: center;
    }

    &__second-link {
      white-space: break-spaces;
    }
  }
`;
