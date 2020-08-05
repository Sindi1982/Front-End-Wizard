import React from "react";

const contributorsList = [
    {
        name: "chiragbhansali",
        url: "https://github.com/chiragbhansali",
    },
    {
        name: "VirtualDOMinic",
        url: "https://github.com/VirtualDOMinic",
    },
    {
        name: "FinleyCorrigan",
        url: "https://github.com/FinleyCorrigan",
    },
    {
        name: "dhrn",
        url: "https://github.com/dhrn",
    },
    {
        name: "spmedia",
        url: "https://github.com/spmedia",
    },
    {
        name: "xyclos",
        url: "https://github.com/xyclos",
    },
    {
        name: "mrcpj1998",
        url: "https://github.com/mrcpj1998",
    },
    {
        name: "mikekok",
        url: "https://github.com/mikekok",
    },
    {
        name: "mdawsondev",
        url: "https://github.com/mdawsondev",
    },
    {
        name: "RyKilleen",
        url: "https://github.com/RyKilleen",
    },
    {
        name: "jevenson",
        url: "https://github.com/jevenson",
    },
    {
        name: "RianWebster",
        url: "https://github.com/RianWebster",
    },
    {
        name: "DoodlePain",
        url: "https://github.com/DoodlePain",
    },
    {
        name: "20lives",
        url: "https://github.com/20lives",
    },
];

const ContributorsPage: React.FC = () => (
    <div className="container">
        <h2 className="text-center">Contributors</h2>
        <p className="text-center">
            Special thanks to everyone who has contributed to this project wether through issues or link suggestions!
        </p>
        <div className="contributors">
            {contributorsList.map((contributor) => (
                <a key={contributor.url} href={contributor.url} target="_blank" rel="noreferrer">
                    {contributor.name}
                </a>
            ))}
        </div>
    </div>
);

export default ContributorsPage;
