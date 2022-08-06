import { createContext } from "react";

import video_1 from "../assets/video/video_1.mp4";

type CardProps = {
  id: number;
  title: string;
  video: string;
  gitHub: string;
  youTube: string;
  liveDemo: string;
};

const cardPortfolioContent: CardProps[] = [
  {
    id: 0,
    title: "Calories Calculator",
    video: video_1,
    gitHub: "https://github.com/KonradLewandowski/calories-calculator",
    youTube: "https://youtu.be/xXfNezI8pdM",
    liveDemo: "https://calories-calculator-konrad.herokuapp.com/signup",
  },
];

type PortfolioProviderType = {
  cardPortfolioContent: CardProps[];
};

const PortfolioContext = createContext<PortfolioProviderType>({
  cardPortfolioContent: [],
});

export const PortfolioProvider: newProvider = ({ children }) => {
  return (
    <PortfolioContext.Provider value={{ cardPortfolioContent }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
