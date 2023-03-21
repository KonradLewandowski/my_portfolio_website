import { ReactElement, useContext, useState } from "react";

import AboutContext from "../../../../context/about.context";

import { CardContainer } from "./card.styles";

import {
  RiArrowDownSLine,
  RiArrowUpSLine
} from "react-icons/ri";

type Props = { id: number; icon: ReactElement; title: string; description: string };

const Card: React.FC<Props> = ({ id, icon, title, description }) => {
  const { getContentName, cardAboutContent } = useContext(AboutContext);
  const [isActiveClass, setIsActiveClass]  = useState(false)

  return (
    <CardContainer onClick={() => {
        getContentName(id)
        setIsActiveClass(!isActiveClass)
    }}>
      {icon}
      <h3>{title}</h3>
      <p className={'description'}>{description}</p>
        <p className={`dropdown ${isActiveClass ? "active" : ''}`}>{cardAboutContent[id].content}</p>
      {isActiveClass ? ( <RiArrowUpSLine className={'arrow'}/>) : (<RiArrowDownSLine className={'arrow'}/>) }
    </CardContainer>
  );
};

export default Card;
