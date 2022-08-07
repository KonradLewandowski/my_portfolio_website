import { Link } from "react-scroll";

import { AiFillFacebook, AiOutlineCopyrightCircle } from "react-icons/ai";

import { FooterContainer, LinksContainer } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="name">My Portfolio Website</div>
      <LinksContainer>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="experience">Experience</Link>
        <Link to="portfolio">My Projects</Link>
        <Link to="contact">contact</Link>
      </LinksContainer>
      <div className="socials">
        <a href="https://www.facebook.com/kd.li.948/" target="_blank" rel="noreferrer">
          <AiFillFacebook />
        </a>
      </div>
      <div className="rights">
        <AiOutlineCopyrightCircle /> Created by Konrad Lewandowski 2022
      </div>
    </FooterContainer>
  );
};

export default Footer;
