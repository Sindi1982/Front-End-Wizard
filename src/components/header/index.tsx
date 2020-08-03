import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import Pill from "../pill";

const Header: React.FC = () => (
    <header className="header text-center">
        <div className="container">
            <Link to="/">
                <img className="header__logo" src={logoImg} alt="front end wizard logo" />
            </Link>
            <Link to="/" className="header__link">
                <h1>Front End Wizard</h1>
            </Link>
            <Link className="header__pill" to="/version-history">
                <Pill version="3.0.0" />
            </Link>
        </div>
    </header>
);

export default Header;
