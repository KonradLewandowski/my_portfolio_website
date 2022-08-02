import styled from "styled-components";

import { device } from "../device/device.styles";
import { variable } from "../variable/variable.styles";

const widthLengthLong = "75%";
const widthLengthMedium = "86%";
const widthLengthSmall = "90%";

export const Container = styled.div`
  width: ${widthLengthLong};
  margin: 0 auto;

  @media screen and (max-width: ${device.tablet}) {
    width: ${widthLengthMedium};
  }

  @media screen and (max-width: ${device.mobile}) {
    width: ${widthLengthSmall};
  }
`;

export const TextLight = styled.div`
  color: ${variable.color.light};
`;
