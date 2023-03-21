import { ReactElement, useContext } from "react";
import FamiliarTechnologiesContext from "../../context/experience.context";

import ExperienceCard from "./familiar-technologies-card/familiar-technologies-card.component";

import { FamiliarTechnologiesContainer } from "./familiar-technologies.styles";

import { Section } from "../section/section.styles";

const Experience = () => {
  const { cardFamiliarTechnologiesContent } = useContext(FamiliarTechnologiesContext);

  type CardProps = {
    id: number;
    title: string;
    content: {
      technology: string;
      level: "Familiar" | "Proficient" | "Excellent";
    }[];
    icon: ReactElement;
  };

  return (
    <Section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Familiar Technologies</h2>
      <FamiliarTechnologiesContainer>
        {cardFamiliarTechnologiesContent.map((card: CardProps) => {
          return <ExperienceCard key={card.id} {...card} />;
        })}
      </FamiliarTechnologiesContainer>
    </Section>
  );
};

export default Experience;
