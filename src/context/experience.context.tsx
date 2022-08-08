import { createContext, ReactElement } from "react";

import { BsPatchCheckFill } from "react-icons/bs";

type CardProps = {
  id: number;
  title: string;
  icon: ReactElement;
  content: {
    technology: string;
    level: "Familiar" | "Proficient" | "Excellent";
  }[];
};

const iconClassName = "icon";

const cardExperienceContent: CardProps[] = [
  {
    id: 0,
    title: "Frontend Development",
    icon: <BsPatchCheckFill className={iconClassName} />,
    content: [
      {
        technology: "HTML",
        level: "Proficient",
      },
      {
        technology: "CSS",
        level: "Proficient",
      },
      {
        technology: "JavaScript",
        level: "Proficient",
      },
      {
        technology: "ReactJs",
        level: "Familiar",
      },
      {
        technology: "TypeScript",
        level: "Familiar",
      },
    ],
  },
  {
    id: 1,
    title: "Backend Development",
    icon: <BsPatchCheckFill className={iconClassName} />,
    content: [
      {
        technology: "Node.js",
        level: "Proficient",
      },
      {
        technology: "Express",
        level: "Proficient",
      },
      {
        technology: "MongoDB",
        level: "Familiar",
      },
      {
        technology: "PosgreSQL",
        level: "Familiar",
      },
    ],
  },
];

type ExperienceProviderType = {
  cardExperienceContent: CardProps[];
};

const ExperienceContext = createContext<ExperienceProviderType>({
  cardExperienceContent: [],
});

export const ExperienceProvider: newProvider = ({ children }) => {
  return (
    <ExperienceContext.Provider value={{ cardExperienceContent }}>
      {children}
    </ExperienceContext.Provider>
  );
};

export default ExperienceContext;
