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
  const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) =>
    e.currentTarget.play();
  const handleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) =>
    e.currentTarget.pause();

  return (
    <PortfolioCardContainer>
      <article>
        <video
          loop
          preload="none"
          muted
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="title">
          <h3>{title}</h3>
          <p className="pc">*On mouse over</p>
          <p className="tablet-mobile">*On click</p>
          <div className="technologies">
            {technologies.map((technology, index) => technology)}
          </div>
        </div>
      </article>
      <div>
        <MainButton>
          <a href={gitHub} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </MainButton>
        <MainButton>
          <a href={youTube} target="_blank" rel="noreferrer">
            YouTube
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
