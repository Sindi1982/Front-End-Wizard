import React from "react";
import useContributors from "../../hooks/useContributors";
import { Error, Spinner } from "../../components";

const ContributorsPage: React.FC = () => {
    const [contributors, error, loading] = useContributors();

    if (!loading && error) {
        return (
            <div className="container">
                <Error message="Error loading category" />
            </div>
        );
    }

    if (loading) {
        return (
            <div className="container">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="container">
            <h2 className="text-center">Contributors</h2>
            <p className="text-center">
                Special thanks to everyone who has contributed to this project whether through issues or link
                suggestions!
            </p>
            <div className="contributors">
                {contributors.map((contributor) => (
                    <a key={contributor.id.toString()} href={contributor.url} target="_blank" rel="noreferrer">
                        <img
                            className="contributor__img"
                            src={contributor.avatar_url}
                            alt={`Github profile for ${contributor.login}`}
                        />
                        {contributor.login}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ContributorsPage;
