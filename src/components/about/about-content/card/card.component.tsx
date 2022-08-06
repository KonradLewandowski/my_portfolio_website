import { ReactElement, useContext } from "react";

import AboutContext from "../../../../context/about.context";

import { CardContainer } from "./card.styles";

type Props = { id: number; icon: ReactElement; title: string; description: string };

const Card: React.FC<Props> = ({ id, icon, title, description }) => {
  const { getContentName } = useContext(AboutContext);

  return (
    <CardContainer onClick={() => getContentName(id)}>
      {icon}
      <h5>{title}</h5>
      <small>{description}</small>
    </CardContainer>
  );
};

export default Card;
