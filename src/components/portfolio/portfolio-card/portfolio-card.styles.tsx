import styled from "styled-components";

import { variable } from "../../../assets/variables/global.styles";

import { device } from "../../../assets/variables/device.styles";

export const PortfolioCardContainer = styled.div`
  position: relative;
  max-width: 300px;
  border: 1px solid transparent;
  background: ${variable.color.backgoundVariant};
  transition: ${variable.effect.transition};
  :hover {
    background: transparent;
    border: 1px solid ${variable.color.white};
  }

  article:hover {
    .title {
      display: none;
    }
  }

  .title {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);

    h3 {
      white-space: nowrap;
      padding: 0 10px;
      border: 1px solid white;
      border-left-color: transparent;
      border-right-color: transparent;
    }

    p {
      font-size: 10px;
      color: ${variable.color.light};
    }

    .technologies {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 1.5rem;
      color: ${variable.color.light};
      font-size: 1.5rem;

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

    /* .tablet-mobile {
      display: none;
    }

    @media screen and (max-width: ${device.tablet}) {
      .pc {
        display: none;
      }
      .tablet-mobile {
        display: block;
      }
    } */
  }

  video {
    opacity: 18%;
    object-fit: cover;
    width: 100%;
    transition: ${variable.effect.transition};
    min-height: 170px;
    :hover {
      transform: scale(1.05);
      opacity: 1;
    }
  }

  > div {
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    div {
      min-width: 110px;
      text-align: center;
    }
  }
`;
