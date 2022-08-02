/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiFillProject,
  AiOutlineMessage,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";

import { NavigationContainer } from "./navigation.styles";

const Navigation = () => {
  const [activeNavigation, setActiveNavigation] = useState("#");
  return (
    <NavigationContainer>
      <a
        href="#"
        onClick={() => setActiveNavigation("#")}
        className={activeNavigation === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNavigation("#about")}
        className={activeNavigation === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNavigation("#experience")}
        className={activeNavigation === "#experience" ? "active" : ""}
      >
        <GiSkills />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNavigation("#services")}
        className={activeNavigation === "#services" ? "active" : ""}
      >
        <AiFillProject />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNavigation("#contact")}
        className={activeNavigation === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </NavigationContainer>
  );
};

export default Navigation;
