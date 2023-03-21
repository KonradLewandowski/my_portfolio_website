import { ReactElement } from "react";
import { ExperienceCardContainer } from "./experience-card.styles";

type Props = {
  title: string;
  content: { technology: string; level: "Familiar" | "Proficient" | "Excellent" }[];
  icon: ReactElement;
};

const ExperienceCard: React.FC<Props> = ({ title, content, icon }) => {
  return (
    <ExperienceCardContainer>
      <h3>{title}</h3>
      <div>
        {content.map((element, index) => {
          return (
            <article key={index}>
              {icon}
              <div>
                <h4>{element.technology}</h4>
                <small>{element.level}</small>
              </div>
            </article>
          );
        })}
      </div>
    </ExperienceCardContainer>
  );
};

export default ExperienceCard;
