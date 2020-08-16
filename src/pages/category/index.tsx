import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const CategoryPage: React.FC = () => {
    const { name } = useParams();

    useEffect(() => {
        console.log(`Get categories with name ${name}`);
    }, []);

    return (
        <div className="container">
            <h2 className="text-center">{name}</h2>
        </div>
    );
};

export default CategoryPage;
