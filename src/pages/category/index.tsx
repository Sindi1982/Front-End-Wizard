import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage: React.FC = () => {
    const { name } = useParams();

    return (
        <div className="container">
            <h2>{name}</h2>
        </div>
    );
};

export default CategoryPage;
