import { ReactElement, useContext } from "react";
import ExperienceContext from "../../context/experience.context";

import ExperienceCard from "./experience-card/experience-card.component";

import { ExperienceContainer } from "./experience.styles";

import { Section } from "../section/section.styles";

const Experience = () => {
  const { cardExperienceContent } = useContext(ExperienceContext);

  type CardProps = {
    id: number;
    title: string;
    content: { technology: string; level: "Familiar" | "Proficient" | "Excellent" }[];
    icon: ReactElement;
  };

  return (
    <Section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <ExperienceContainer>
        {cardExperienceContent.map((card: CardProps) => {
          return <ExperienceCard key={card.id} {...card} />;
        })}
      </ExperienceContainer>
    </Section>
  );
};

export default Experience;
