import React, { ReactElement } from "react";

import { PortfolioCardContainer } from "./portfolio-card.styles";

import { MainButton, ButtonPrimary } from "../../button/button.styles";

import { dateComparer } from "../../../helpers/date-comparer.helper";

import NewIcon from "../../../uploads/images/new-icon.png";

interface IProps {
  title: string;
  video: string;
  gitHub: string[];
  youTube: string;
  liveDemo: string;
  technologies: ReactElement[];
  publishedAt: string;
}

const PortfolioCard = ({
  title,
  video,
  gitHub,
  youTube,
  liveDemo,
  technologies,
  publishedAt,
}: IProps) => {
  const isWithinNDays = dateComparer(publishedAt, 180);

  return (
    <PortfolioCardContainer isWithinNDays={isWithinNDays}>
      <article className={"video-box"}>
        <div className={`new`}>
          <img src={NewIcon} alt="" />
        </div>

        <a
          href={youTube !== "" ? youTube : undefined}
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
        <div className={"buttons-box__github"}>
          {gitHub.map((link, index) => {
            return (
              <MainButton>
                <a href={link} target="_blank" rel="noreferrer">
                  {index > 0 ? (
                    <small className={"buttons-box__second-link"}>
                      GitHub 2nd
                    </small>
                  ) : (
                    "GitHub"
                  )}
                </a>
              </MainButton>
            );
          })}
        </div>
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
