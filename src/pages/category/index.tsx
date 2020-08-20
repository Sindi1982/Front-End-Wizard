import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLinks from "../../hooks/useLinks";
import useCategories from "../../hooks/useCategories";
import { Link, Spinner, Error } from "../../components";
import { ILink, ILinkGroup } from "../../interfaces";

const CategoryPage: React.FC = () => {
    const { name } = useParams();
    const [categories] = useCategories();
    const [links, fetchLinks] = useLinks();

    useEffect(() => {
        fetchLinks(name);
    }, []);

    const linkGroup = links.find((linkGroup: ILinkGroup) => linkGroup.name === name);

    if (!linkGroup || linkGroup.loading || categories.loading) {
        return (
            <div className="container">
                <Spinner />
            </div>
        );
    }

    if (linkGroup.error || categories.error) return <Error message="Error loading category" />;

    const currentCategory = categories.data.find((category) => category.route === name);

    if (!currentCategory) return <Error message={`No category for ${name}`} />;

    return (
        <div className="container">
            <h2 className="text-center category__title">{currentCategory.name}</h2>
            <p className="text-center category__description">{currentCategory.description}</p>
            <div className="category_links">
                {linkGroup.links.map((link: ILink) => (
                    <Link key={link._id} link={link} bookmarked={false} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
