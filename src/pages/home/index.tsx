import React from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../interfaces";
import useCategories from "../../hooks/useCategories";
import { Spinner, Error } from "../../components";

const HomePage: React.FC = () => {
    const [categories] = useCategories();

    return (
        <div className="container">
            <p className="text-center description">The best place for front end resources</p>
            <div className="topics">
                {categories.loading && <Spinner />}
                {!categories.loading && categories.error && <Error message={categories.error} />;
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
