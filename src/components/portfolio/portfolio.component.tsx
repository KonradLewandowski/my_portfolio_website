import { useContext } from "react";

import PortfolioContext from "../../context/portfolio.context";

import { PortfolioContainer } from "./portforio.styles";

import { Section } from "../section/section.styles";

import PortfolioCard from "./portfolio-card/portfolio-card.component";

type CardProps = {
  id: number;
  title: string;
  video: string;
  gitHub: string;
  youTube: string;
  liveDemo: string;
};

const Portfolio = () => {
  const { cardPortfolioContent } = useContext(PortfolioContext);
  return (
    <Section>
      <h5>What Have I Built?</h5>
      <h2>My Projects</h2>
      <PortfolioContainer id="portfolio">
        {cardPortfolioContent.map((card: CardProps) => (
          <PortfolioCard key={card.id} {...card} />
        ))}
      </PortfolioContainer>
    </Section>
  );
};

export default Portfolio;
