import { useContext } from "react";

import AboutContext from "../../../../context/about.context";

import { CardContainer } from "./card.styles";

const Card = ({
  id,
  icon,
  title,
  description,
}: {
  id: number;
  icon: string;
  title: string;
  description: string;
}) => {
  const { getStateName } = useContext(AboutContext);

  return (
    <CardContainer onClick={() => getStateName(id)}>
      {icon}
      <h5>{title}</h5>
      <small>{description}</small>
    </CardContainer>
  );
};

export default Card;
