import { createContext, useState, useEffect } from "react";

// type Value = {
//   text: string;
// };

const AboutContext = createContext<any | undefined>(undefined);

const content: any = {
  experience: `For the past year I have focused on building and expanding my skills in the field of web development. Front-end, back-end, data bases and external API’s are some of the topics I have made myself familiar with. I would gladly become a part of a team of developers, from whom I can learn and further expand my abilities while working to achieve common objectives.`,
  clients: "ko",
  projects: "text",
};

export const AboutProvider = ({ children }: { children: any }) => {
  const [state, setState] = useState(content.experience);

  const changeText = (newContent: string) => {
    setState(() => {
      return content[newContent];
    });
  };

  return (
    <AboutContext.Provider value={{ state, changeText }}>
      {children}
    </AboutContext.Provider>
  );
};

export default AboutContext;
