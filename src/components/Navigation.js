import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active" : "hover")}
        >
          <li>acceuil</li>
        </NavLink>

        <li className="nav-portfolio">
          portfolio
          <ul className="nav-projects">
            <NavLink
              to="/projet-1"
              className={(nav) => (nav.isActive ? "nav-active" : "hover")}
            >
              <li>Morpion/Puissance 4</li>
            </NavLink>
            <NavLink
              to="/projet-2"
              className={(nav) => (nav.isActive ? "nav-active" : "hover")}
            >
              <li>Pokedex</li>
            </NavLink>
            <NavLink
              to="/projet-3"
              className={(nav) => (nav.isActive ? "nav-active" : "hover")}
            >
              <li>Quizz sur l'astronomie</li>
            </NavLink>
            <NavLink
              to="/projet-4"
              className={(nav) => (nav.isActive ? "nav-active" : "hover")}
            >
              <li>React World Countries</li>
            </NavLink>
            <NavLink
              to="/projet-5"
              className={(nav) => (nav.isActive ? "nav-active" : "hover")}
            >
              <li>React Cooking App</li>
            </NavLink>
          </ul>
        </li>

        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "hover")}
        >
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
