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

const cardFamiliarTechnologiesContent: CardProps[] = [
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
        technology: "CSS / SASS",
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
        technology: "PHP",
        level: "Familiar",
      },
      {
        technology: "MongoDB",
        level: "Familiar",
      },
      {
        technology: "MySQL",
        level: "Familiar",
      }
    ]
  },
  {
    id: 2,
    title: "Other Technologies and Solutions",
    icon: <BsPatchCheckFill className={iconClassName} />,
    content: [
      {
        technology: "WordPress",
        level: "Proficient",
      },
      {
        technology: "Jira",
        level: "Proficient",
      },
      {
        technology: "Git",
        level: "Proficient",
      },
      {
        technology: "Postman",
        level: "Proficient",
      },
      {
        technology: "Responsive Web Design",
        level: "Excellent",
      },
    ],
  },
];

type FamiliarTechnologiesProviderType = {
  cardFamiliarTechnologiesContent: CardProps[];
};

const FamiliarTechnologiesContext = createContext<FamiliarTechnologiesProviderType>({
  cardFamiliarTechnologiesContent: [],
});

export const ExperienceProvider: newProvider = ({ children }) => {
  return (
    <FamiliarTechnologiesContext.Provider value={{ cardFamiliarTechnologiesContent }}>
      {children}
    </FamiliarTechnologiesContext.Provider>
  );
};

export default FamiliarTechnologiesContext;
