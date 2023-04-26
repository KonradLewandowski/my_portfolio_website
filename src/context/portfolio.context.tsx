import { createContext, ReactElement } from "react";

////////////videos/////////////////
import v_map from "../uploads/video/map.mp4";
import v_recipes from "../uploads/video/recipes.mp4";
import v_portfolio from "../uploads/video/portfolio.mp4";
import v_shop from "../uploads/video/shop.mp4";

///////////icons//////////////////
import {
  SiJavascript,
  SiLeaflet,
  SiSass,
  SiReact,
  SiStyledcomponents,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiFirebase,
} from "react-icons/si";

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
    title: "Map Workout",
    video: v_map,
    gitHub: "https://github.com/KonradLewandowski/map-workout-app",
    youTube: "https://youtu.be/lrGDF5o0JYM",
    liveDemo: "https://map-app-kl.netlify.app",
    technologies: [
      <SiJavascript key={1} />,
      <SiHtml5 key={2} />,
      <SiCss3 key={3} />,
      <SiLeaflet key={4} />,
    ],
  },
  {
    id: 1,
    title: "Recipes",
    video: v_recipes,
    gitHub: "https://github.com/KonradLewandowski/recipies-app-project",
    youTube: "https://youtu.be/QipPqK00w-4",
    liveDemo: "https://recipies-app-kl.netlify.app",
    technologies: [
      <SiJavascript key={1} />,
      <SiHtml5 key={2} />,
      <SiSass key={3} />,
    ],
  },
  {
    id: 2,
    title: "My Portfolio",
    video: v_portfolio,
    gitHub: "https://github.com/KonradLewandowski/my_portfolio_website",
    youTube: "https://youtu.be/bKmOIHke7oI",
    liveDemo: "https://konrad-lewandowski-portfolio.netlify.app",
    technologies: [
      <SiTypescript key={1} />,
      <SiReact key={2} className="rotate" style={{ color: "#18a6df" }} />,
      <SiStyledcomponents key={3} />,
    ],
  },
  {
    id: 3,
    title: "Shop",
    video: v_shop,
    gitHub: "https://github.com/KonradLewandowski/crwn-clothing.git",
    youTube: "",
    liveDemo: "https://crwn-clothing-kl.netlify.app/",
    technologies: [
      <SiFirebase key={4} />,
      <SiReact key={2} className="rotate" style={{ color: "#18a6df" }} />,
      <SiStyledcomponents key={3} />,
      <SiJavascript key={4} />,
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
