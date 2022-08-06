import { createContext, ReactElement, useState } from "react";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiFolderLine } from "react-icons/ri";

type CardProps = {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
  content: string;
};

const iconClassName = "icon";

const cardAboutContent: CardProps[] = [
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

type AboutProviderType = {
  content: string;
  getContentName: (id: number) => void;
  cardAboutContent: CardProps[];
};

const AboutContext = createContext<AboutProviderType>({
  content: "",
  getContentName: () => {},
  cardAboutContent: [],
});

export const AboutProvider: newProvider = ({ children }) => {
  const [content, setContent] = useState(cardAboutContent[0].content);

  const getContentName = (id: number) => {
    setContent(cardAboutContent[id].content);
  };

  const value: AboutProviderType = {
    getContentName,
    content,
    cardAboutContent,
  };

  return <AboutContext.Provider value={value}>{children}</AboutContext.Provider>;
};

export default AboutContext;
