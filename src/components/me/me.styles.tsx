import styled from "styled-components";

import { variable } from "../variable/variable.styles";

export const MeContainer = styled.div`
  background: linear-gradient(${variable.color.primary}, transparent);
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 4rem;
  /* border-radius: 12rem 12rem 0 0; */
  padding: 5rem 1.5rem 1.5rem 1.5rem;
`;
