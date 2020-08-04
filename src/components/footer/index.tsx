import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo-kieran.png";
import twitterLogo from "../../assets/images/twitter.svg";
import githubLogo from "../../assets/images/github.svg";

const Footer: React.FC = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer__grid">
                <div className="footer__created">
                    <img src={logoImg} alt="Kieran Venison logo" className="footer__created-img" />
                    <div className="footer__created-details">
                        <p className="footer__created-title">
                            <b>Front End Wizard</b>
                        </p>
                        <p className="footer__created-description">
                            Created with love by{" "}
                            <a href="https://www.kieranvenison.co.uk" target="_blank" rel="noreferrer">
                                Kieran Venison
                            </a>
                        </p>
                        <p className="footer__created-contributors">
                            <Link to="/contributors">Contributors</Link>
                        </p>
                    </div>
                </div>
                <div className="footer__social">
                    <a
                        className="footer__social-icon"
                        href="https://twitter.com/kieranmv95"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={twitterLogo} alt="Twitter logo" />
                    </a>
                    <a
                        className="footer__social-icon"
                        href="https://github.com/kieranmv95"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={githubLogo} alt="GitHub logo" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
