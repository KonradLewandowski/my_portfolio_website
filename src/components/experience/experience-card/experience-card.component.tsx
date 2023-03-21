import { ReactElement, useState } from "react";
import { ExperienceCardContainer } from "./experience-card.styles";

import {
    RiArrowDownSLine,
    RiArrowUpSLine
} from "react-icons/ri";

type Props = {
  title: string;
  content: { technology: string; level: "Familiar" | "Proficient" | "Excellent" }[];
  icon: ReactElement;
};

const ExperienceCard: React.FC<Props> = ({ title, content, icon }) => {
    const [isActiveClass, setIsActiveClass]  = useState(false)

  return (
    <ExperienceCardContainer onClick={() =>setIsActiveClass(!isActiveClass)} >
      <h3>{title}</h3>
      <div className={`dropdown ${isActiveClass && 'active'}`}>
        {content.map((element, index) => {
          return (
            <article key={index}>
              {icon}
              <div>
                <h4>{element.technology}</h4>
                <p>{element.level}</p>
              </div>
            </article>
          );
        })}
      </div>
        {isActiveClass ? ( <RiArrowUpSLine className={'arrow'}/>) : (<RiArrowDownSLine className={'arrow'}/>) }
    </ExperienceCardContainer>
  );
};

export default ExperienceCard;
