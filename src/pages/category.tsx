import React, { useEffect, useState } from "react";
import { useParams, Link as Route } from "react-router-dom";
import useLinks from "../hooks/useLinks";
import useCategories from "../hooks/useCategories";
import { Link, Spinner, Error } from "../components";
import { ILink, ILinkGroup } from "../interfaces";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { FavoritesActions } from "../enums";

const CategoryPage: React.FC = () => {
    const { name } = useParams();
    const [categories] = useCategories();
    const [links, fetchLinks] = useLinks();
    const dispatch = useDispatch();
    const favoritesSelector = (state: RootState) => state.favorites as string[];
    const favorites = useSelector(favoritesSelector);

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

    const favoriteLink = (id: string): void => {
        if (favorites.includes(id)) {
            dispatch({ type: FavoritesActions.FAVORITES_REMOVE, payload: id });
        } else {
            dispatch({ type: FavoritesActions.FAVORITES_ADD, payload: id });
        }
    };

    return (
        <div className="container">
            <h2 className="text-center category__title">{currentCategory.name}</h2>
            <p className="text-center category__redirect">
                No the category you are looking for? <Route to="/">Click Here</Route> to view all categories
            </p>
            <p className="text-center category__description">{currentCategory.description}</p>
            <div className="category_links">
                {linkGroup.links.map((link: ILink) => (
                    <Link
                        key={link._id}
                        link={link}
                        bookmarked={favorites.includes(link._id)}
                        favoriteLink={favoriteLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
