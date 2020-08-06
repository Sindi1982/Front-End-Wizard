import React from "react";

interface IProps {
    version: string;
}

const Pill = ({ version }: IProps) => <strong className="pill">v{version}</strong>;

export default Pill;
