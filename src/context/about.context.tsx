import { createContext, useState } from "react";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiFolderLine } from "react-icons/ri";

type newProvider = { ({ children }: { children: any }): JSX.Element };

const AboutContext = createContext<any | undefined>(undefined);

type CardContent = {
  id: number;
  icon: any;
  title: string;
  description: string;
  content: string;
};

const iconClassName = "icon";

const cardContent: CardContent[] = [
  {
    id: 0,
    icon: <FaAward className={iconClassName} />,
    title: "Who Am I?",
    description: "A few words about me",
    content: `For the past year I have focused on building and expanding my skills in the field of web development. Front-end, back-end, data bases and external API’s are some of the topics I have made myself familiar with. I would gladly become a part of a team of developers, from whom I can learn and further expand my abilities while working to achieve common objectives.`,
  },
  {
    id: 1,
    icon: <FiUsers className={iconClassName} />,
    title: "Clients",
    description: "100+",
    content: "text",
  },
  {
    id: 2,
    icon: <RiFolderLine className={iconClassName} />,
    title: "Projects",
    description: "5+ completed",
    content: "text2",
  },
];

export const AboutProvider: newProvider = ({ children }) => {
  const [state, setState] = useState(cardContent[0].content);

  const getStateName = (id: number) => {
    setState(cardContent[id].content);
  };

  return (
    <AboutContext.Provider value={{ getStateName, state, cardContent }}>
      {children}
    </AboutContext.Provider>
  );
};

export default AboutContext;
