import React from "react";
import warningIcon from "../assets/images/warning.svg";

interface IError {
    message?: string;
}

const Error = ({ message = "Error" }: IError) => (
    <div className="error">
        <img src={warningIcon} alt="warnign icon" className="error__icon" />
        <p className="error__message">{message}</p>
    </div>
);

export default Error;
