import { createContext, ReactElement } from "react";

////////////videos/////////////////
import v_calories from "../assets/video/calories.mp4";
import v_map from "../assets/video/map.mp4";
import v_recipes from "../assets/video/recipes.mp4";
import v_portfolio from "../assets/video/portfolio.mp4";

///////////icons//////////////////
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiPug,
  SiLeaflet,
  SiSass,
  SiReact,
  SiStyledcomponents,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { GrNode } from "react-icons/gr";

type CardProps = {
  id: number;
  title: string;
  video: string;
  gitHub: string;
  youTube: string;
  liveDemo: string;
  technologies: ReactElement[];
};

const cardPortfolioContent: CardProps[] = [
  {
    id: 0,
    title: "Calories Calculator",
    video: v_calories,
    gitHub: "https://github.com/KonradLewandowski/calories-calculator",
    youTube: "https://youtu.be/xXfNezI8pdM",
    liveDemo: "https://calories-calculator-konrad.herokuapp.com/signup",
    technologies: [<SiJavascript />, <GrNode />, <SiExpress />, <SiMongodb />, <SiPug />],
  },
  {
    id: 1,
    title: "Map Workout",
    video: v_map,
    gitHub: "https://github.com/KonradLewandowski/map-workout-app",
    youTube: "https://youtu.be/lrGDF5o0JYM",
    liveDemo: "https://map-app-kl.netlify.app",
    technologies: [<SiJavascript />, <SiHtml5 />, <SiCss3 />, <SiLeaflet />],
  },
  {
    id: 2,
    title: "Recipes",
    video: v_recipes,
    gitHub: "https://github.com/KonradLewandowski/recipies-app-project",
    youTube: "https://youtu.be/QipPqK00w-4",
    liveDemo: "https://recipies-app-kl.netlify.app",
    technologies: [<SiJavascript />, <SiHtml5 />, <SiSass />],
  },
  {
    id: 3,
    title: "My Portfolio",
    video: v_portfolio,
    gitHub: "https://github.com/KonradLewandowski/my_portfolio_website",
    youTube: "https://youtu.be/bKmOIHke7oI",
    liveDemo: "https://konrad-lewandowski-portfolio.netlify.app",
    technologies: [
      <SiTypescript />,
      <SiReact className="rotate" style={{ color: "#18a6df" }} />,
      <SiStyledcomponents />,
    ],
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
