import React from "react";

interface IProps {
    version: string;
}

const Pill = ({ version }: IProps) => <div className="pill">v{version}</div>;

export default Pill;
