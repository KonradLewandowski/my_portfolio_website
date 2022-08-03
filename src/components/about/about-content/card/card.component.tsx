import { useContext } from "react";

import AboutContext from "../../../../context/about.context";

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
  const { changeText } = useContext(AboutContext);

  return (
    <CardContainer onClick={() => changeText(title.toLowerCase())}>
      {icon}
      <h5>{title}</h5>
      <small>{content}</small>
    </CardContainer>
  );
};

export default Card;
