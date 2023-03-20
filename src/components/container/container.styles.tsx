import styled from "styled-components";

import { variable } from "../../assets/variables/global.styles";

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${variable.container["1110"]};
  padding: 0 ${variable.spacings["16"]};
`;

export const TextLight = styled.div`
  color: ${variable.color.light};
`;
