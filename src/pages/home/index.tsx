import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../interfaces";
import useCategories from "../../hooks/useCategories";

const HomePage: React.FC = () => {
    const [categories] = useCategories();

    return (
        <div className="container">
            <p className="text-center description">The best place for front end resources</p>
            <div className="topics">
                {categories.loading && <div>Loading...</div>}
                {!categories.loading && categories.error && <div>Error: {categories.error}</div>}
                {!categories.error &&
                    !categories.loading &&
                    categories.data.map((topic: ICategory) => (
                        <Link to={`/category/${topic.route}`} key={topic._id}>
                            {topic.name}
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default HomePage;
