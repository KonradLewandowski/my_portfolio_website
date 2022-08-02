import React from "react";

import { CardsContainer } from "./cards.styles";

import Card from "../card/card.component";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiFolderLine } from "react-icons/ri";

interface CardContent {
  icon: any;
  title: string;
  content: string;
}

const iconClassName = "icon";

const cardContent: CardContent[] = [
  {
    icon: <FaAward className={iconClassName} />,
    title: "Experience",
    content: "lorem ipsum",
  },
  {
    icon: <FiUsers className={iconClassName} />,
    title: "Clients",
    content: "100+",
  },
  {
    icon: <RiFolderLine className={iconClassName} />,
    title: "Projects",
    content: "5+ completed",
  },
];

const Cards = () => {
  return (
    <CardsContainer>
      {cardContent.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </CardsContainer>
  );
};

export default Cards;
