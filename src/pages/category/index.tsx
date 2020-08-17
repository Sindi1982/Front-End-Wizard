import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLinks from "../../hooks/useLinks";
import { Link } from "../../components";
import { ILinkGroup } from "../../interfaces";

const CategoryPage: React.FC = () => {
    const { name } = useParams();
    const [links, fetchLinks] = useLinks();

    useEffect(() => {
        fetchLinks(name);
    }, []);

    const linkGroup = links.find((linkGroup: ILinkGroup) => linkGroup.name === name);

    if (!linkGroup || linkGroup.loading) return <div>Loading</div>;
    if (linkGroup.error) return <div>{linkGroup.error}</div>;

    return (
        <div className="container">
            <h2 className="text-center">{name}</h2>
            <div className="category_links">
                {!linkGroup.links.length && <div>No results found</div>}
                {linkGroup.links.length > 0 &&
                    linkGroup.links.map((link) => <Link key={link._id} link={link} bookmarked={false} />)}
            </div>
        </div>
    );
};

export default CategoryPage;
