import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useLinks from "../../hooks/useLinks";

const CategoryPage: React.FC = () => {
    const { name } = useParams();
    const [links, fetchLinks] = useLinks();

    useEffect(() => {
        fetchLinks(name);
    }, []);

    const linkGroup = links.find((linkGroup) => linkGroup.name === name);

    if (!linkGroup || linkGroup.loading) return <div>Loading</div>;
    if (linkGroup.error) return <div>{linkGroup.error}</div>;

    return (
        <div className="container">
            <h2 className="text-center">{name}</h2>
            {!linkGroup.links.length && <div>No results found</div>}
            {linkGroup.links.length &&
                linkGroup.links.map((link) => (
                    <div key={link._id}>
                        {link.title} <br />
                        {link.description}
                    </div>
                ))}
        </div>
    );
};

export default CategoryPage;
