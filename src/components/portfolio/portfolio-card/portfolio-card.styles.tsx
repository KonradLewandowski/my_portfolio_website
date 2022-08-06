import styled from "styled-components";

import { variable } from "../../variable/variable.styles";

import { device } from "../../device/device.styles";

export const PortfolioCardContainer = styled.div`
  position: relative;
  max-width: 300px;
  border: 1px solid transparent;
  background: ${variable.color.backgoundVariant};
  transition: ${variable.effect.transition};
  :hover {
    border: 1px solid ${variable.color.white};
  }

  article:hover {
    .title {
      display: none;
    }
  }

  .title {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);

    h3 {
      border: 1px solid white;
    }

    p {
      font-size: 10px;
      color: ${variable.color.light};
    }

    .tablet-mobile {
      display: none;
    }

    @media screen and (max-width: ${device.tablet}) {
      .pc {
        display: none;
      }
      .tablet-mobile {
        display: block;
      }
    }
  }

  video {
    opacity: 0;
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
