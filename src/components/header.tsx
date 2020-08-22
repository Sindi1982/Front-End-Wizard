import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/images/logo.png";
import Pill from "./pill";

const Header: React.FC = () => {
    const location = useLocation();

    return (
        <header className="header text-center">
            <div className="container">
                <div className={location.pathname !== "/" ? "header--mini" : ""}>
                    <Link to="/">
                        <img className="header__logo" src={logoImg} alt="front end wizard logo" />
                    </Link>
                    <div className="header__copy">
                        <Link to="/" className="header__link">
                            <h1>Front End Wizard</h1>
                        </Link>
                        <div>
                            <Link className="header__pill" to="/version-history">
                                <Pill version="3.0.1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
