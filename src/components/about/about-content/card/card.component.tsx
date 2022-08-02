import React from "react";

import { CardContainer } from "./card.styles";

const Card = ({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: string;
}) => {
  console.log(icon);
  return (
    <CardContainer>
      {icon}
      <h5>{title}</h5>
      <small>{content}</small>
    </CardContainer>
  );
};

export default Card;
