import { Link } from "react-scroll";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiFillProject,
  AiOutlineMessage,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";

import { NavigationContainer } from "./navigation.styles";

const sectionsDetails = [
  { to: "home", icon: <AiOutlineHome /> },
  { to: "about", icon: <AiOutlineUser /> },
  { to: "familiar-technologies", icon: <GiSkills /> },
  { to: "portfolio", icon: <AiFillProject /> },
  { to: "contact", icon: <AiOutlineMessage /> },
];

const Navigation = () => {
  return (
    <NavigationContainer>
      {sectionsDetails.map((sectionDetail) => (
        <Link key={sectionDetail.to} activeClass="active" spy to={sectionDetail.to}>
          {sectionDetail.icon}
        </Link>
      ))}
    </NavigationContainer>
  );
};

export default Navigation;
