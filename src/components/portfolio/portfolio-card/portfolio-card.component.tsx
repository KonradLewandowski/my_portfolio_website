import React, { ReactElement } from "react";

import { PortfolioCardContainer } from "./portfolio-card.styles";

import { MainButton, ButtonPrimary } from "../../button/button.styles";

type Props = {
  title: string;
  video: string;
  gitHub: string;
  youTube: string;
  liveDemo: string;
  technologies: ReactElement[];
};

const PortfolioCard: React.FC<Props> = ({
  title,
  video,
  gitHub,
  youTube,
  liveDemo,
  technologies,
}) => {
  return (
    <PortfolioCardContainer>
      <article className={"video-box"}>
        <a
          href={youTube != "" ? youTube : undefined}
          target="_blank"
          rel="noreferrer"
        >
          <div className="title">
            <h3>{title}</h3>
            <p className="pc">*On mouse over</p>
            <div className="technologies">
              {technologies.map((technology) => technology)}
            </div>
          </div>
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </a>
      </article>
      <div className={"buttons-box"}>
        <MainButton>
          <a href={gitHub} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </MainButton>
        <ButtonPrimary>
          <a href={liveDemo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </ButtonPrimary>
      </div>
    </PortfolioCardContainer>
  );
};

export default PortfolioCard;
