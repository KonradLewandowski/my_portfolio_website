import { ReactElement, useContext } from "react";
import AboutContext from "../../../../context/about.context";

import { CardsContainer } from "./cards.styles";

import Card from "../card/card.component";

type CardProps = {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
};

const Cards = () => {
  const { cardAboutContent } = useContext(AboutContext);

  return (
    <CardsContainer>
      {cardAboutContent.map((card: CardProps) => (
        <Card key={card.id} {...card} />
      ))}
    </CardsContainer>
  );
};

export default Cards;
