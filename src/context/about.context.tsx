import { createContext, ReactElement, useState } from "react";

import { CgProfile } from "react-icons/cg";
import { RiFolderLine } from "react-icons/ri";
import { ImNext } from "react-icons/im";

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
    icon: <CgProfile className={iconClassName} />,
    title: "Who Am I?",
    description: "A few words about me",
    content:
      "I am a former soldier and for the past year I have focused on building and expanding my skills in the field of web development. Frontend, Backend, data bases and external API’s are some of the technologies I have made myself familiar with. I would gladly become a part of a team of developers, from whom I can learn and further expand my abilities while working to achieve common objectives.",
  },
  {
    id: 1,
    icon: <RiFolderLine className={iconClassName} />,
    title: "Projects",
    description: "4+ completed",
    content:
      "I have completed numerous courses during which I built a variety of projects alongside the instructors and used the experience I gained to create four projects of my own since then improving and expanding my knowledge along the way.",
  },
  {
    id: 2,
    icon: <ImNext className={iconClassName} />,
    title: "What Next(Js)?",
    description: "I would like to...",
    content:
      "I am going to build another project which combines Backend and Frontend technologies. I am  planning on particularly mastering ReactJs in my future projects and I would also like to get acquainted with another library - NextJs.",
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
