import { useContext } from "react";
import AboutContext from "../../../../context/about.context";

import { CardsContainer } from "./cards.styles";

import Card from "../card/card.component";

const Cards = () => {
  const { cardContent } = useContext(AboutContext);

  return (
    <CardsContainer>
      {cardContent.map(
        (
          card: JSX.IntrinsicAttributes & {
            id: number;
            icon: string;
            title: string;
            description: string;
          },
          _index: any
        ) => (
          <Card key={card.id} {...card} />
        )
      )}
    </CardsContainer>
  );
};

export default Cards;
