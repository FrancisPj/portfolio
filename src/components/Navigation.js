import React from 'react';
import imageProfil from "../media/fjmin.JPG"
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
      <nav className={"sidebar"}>
        <div className="id">
            <div className="idContent">
                <img src={imageProfil} alt="profil francis"/>
                <div className={"name"}>
                    <h2>JUBILO Francis</h2>
                    <h2>Développeur Web</h2>
                </div>
            </div>

        </div>
        <div className="navigation">
            <ul>
                <li>
                    <NavLink to="/" activeClassName="navActive exact">
                        <i className="fas fa-home"/>
                        <span>Accueil</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projets" activeClassName="navActive ">
                        <i className="fas fa-mountain"/>
                        <span>Projets</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/contact" activeClassName="navActive">
                        <i className="fas fa-address-book"/>
                        <span>Contact</span>
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className="socialNetwork">

            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/francis-jubilo" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"  aria-hidden="true" /><span className="sr-only">Profil LinkedIn</span></a>
                </li>

                <li>
                    <a href="https://github.com/FrancisPj" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github" aria-hidden="true" /><span className="sr-only">Profil GitHub</span></a>
                </li>

            </ul>
        </div>
      </nav>
    );
};

export default Navigation;
