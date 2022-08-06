import { createContext, ReactElement } from "react";

import { BsPatchCheckFill } from "react-icons/bs";

type CardProps = {
  id: number;
  title: string;
  icon: ReactElement;
  content: {
    technology: string;
    level: "Experienced" | "Basic";
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
        level: "Experienced",
      },
      {
        technology: "CSS",
        level: "Experienced",
      },
      {
        technology: "CSS",
        level: "Experienced",
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
        level: "Basic",
      },
      {
        technology: "Express",
        level: "Experienced",
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
