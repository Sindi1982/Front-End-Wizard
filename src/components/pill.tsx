import React from "react";

interface IProps {
    version: string;
}

const Pill = ({ version }: IProps) => <span className="pill">v{version}</span>;

export default Pill;
