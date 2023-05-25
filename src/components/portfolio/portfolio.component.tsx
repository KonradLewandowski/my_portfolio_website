import { useContext } from "react";

import PortfolioContext from "../../context/portfolio.context";

import { PortfolioContainer } from "./portforio.styles";

import { Section } from "../section/section.styles";

import PortfolioCard from "./portfolio-card/portfolio-card.component";

const Portfolio = () => {
  const { cardPortfolioContent } = useContext(PortfolioContext);
  return (
    <Section id="portfolio">
      <p className={"before-title"}>What Have I Built?</p>
      <h2>My Projects</h2>
      <PortfolioContainer>
        {cardPortfolioContent.map((card) => (
          <PortfolioCard key={card.id} {...card} />
        ))}
      </PortfolioContainer>
    </Section>
  );
};

export default Portfolio;
