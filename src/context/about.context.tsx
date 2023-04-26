import { createContext, ReactElement, useState } from "react";

import { CgProfile } from "react-icons/cg";
import { RiFolderLine } from "react-icons/ri";
import {TbBrandReactNative} from 'react-icons/tb'


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
      "As a former Air Cavalry soldier turned frontend developer, I bring a unique combination of leadership skills and technical expertise to your team. With proficiency in JavaScript, Node.js, HTML, CSS (preprocessors), Jira, and Git version control system, I have contributed to the development of solutions for prestigious clients such as BNY Mellon ,AirElite, and LaSalle. I am a strong team player and quick learner, eager to collaborate with other developers and expand my abilities. If you're looking for a driven and versatile developer with a proven track record, I believe I am an ideal candidate for the role.",
  },
  {
    id: 1,
    icon: <RiFolderLine className={iconClassName} />,
    title: "Commercial Experience",
    description: "Web Developer",
    content:
      "As a Web Developer, I have worked with various technologies including Wordpress, Git version control, Jira project management tool, JavaScript programming language, Sass CSS preprocessor, and some PHP programming language. Additionally, I have used Docker software containerization tool. This enabled me to create responsive websites, web applications, and deliver business value to clients through efficient implementation of functionalities.",
  },
  {
    id: 2,
    icon: <TbBrandReactNative className={iconClassName} />,
    title: "Am I Native?",
    description: "I would like to...",
    content:
      "...focus on deepening my knowledge of React and also learn React Native. React is a JavaScript library that is good for creating user interfaces, and React Native allows building mobile applications for iOS and Android. So, if I have more knowledge about React, it will be easier for me to use it in practice, and learning React Native will help me create mobile interfaces on similar principles to React, but with tools dedicated to mobile applications.",
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

  return (
    <AboutContext.Provider value={value}>{children}</AboutContext.Provider>
  );
};

export default AboutContext;
