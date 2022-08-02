import React from "react";

import { MeContainer } from "./me.styles";
import ME from "../../assets/me.png";

const Me = () => {
  return (
    <MeContainer>
      <img src={ME} alt="" />
    </MeContainer>
  );
};

export default Me;
