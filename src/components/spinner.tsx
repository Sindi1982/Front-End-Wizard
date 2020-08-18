import React from "react";
import spinnerImg from "../assets/images/spinner.svg";

interface ISpinner {
    message?: string;
}

const Spinner = ({ message = "Loading..." }: ISpinner) => (
    <div className="spinner">
        <img className="spinner__img" src={spinnerImg} alt="spinner icon" />
        <p className="spinner__text">{message}</p>
    </div>
);

export default Spinner;
