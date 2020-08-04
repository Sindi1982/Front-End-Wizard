import React from "react";
import { Pill } from "../../components";

const versionHistory = [
    {
        version: "3.0.0",
        description: "Full rebuild",
        features: [
            "Rebuilt the application from the ground up to enhance speed and performance",
            "Split out topics into individual pages",
            "Introduced starring links",
            "Added version history",
            "Added contributors page",
            "Removed a lot of broken links",
        ],
    },
    {
        version: "2.0.2",
        description: "Link work",
        features: ["Added link validation", "Added new links"],
    },
    {
        version: "2.0.0",
        description: "Added date's to links",
        features: [
            "Updated README.md to warn of removal",
            "Fixed input bugs",
            "Added contributors page",
            "Lots of bugfixes",
        ],
    },
    {
        version: "1.x.x",
        description: "README.md",
        features: ["1.x.x and below are the old README.md format"],
    },
];

const VersionHistoryPage: React.FC = () => (
    <div className="container">
        <h2 className="text-center">Version History</h2>
        <div className="version-history__container">
            {versionHistory.map((item) => (
                <div key={item.version} className="version-history__item">
                    <p className="version-history__number">
                        <Pill version={item.version} /> {item.description}
                    </p>
                    {item.features && (
                        <ul className="version-history__features">
                            {item.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    </div>
);

export default VersionHistoryPage;
