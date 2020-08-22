import React from "react";
import { Pill } from "../components";

const versionHistory = [
    {
        version: "3.0.1",
        description: "Mobile Tweaks",
        features: [
            "Fixed category pills on mobile to make more readable",
            "Fixed bug on link cards only filling up 2/3 of the column",
            "A range of mobile spacing tweaks and typography tweaks to improve UX on mobile",
            "Increased tap size of the bookmark icon",
        ],
    },
    {
        version: "3.0.0",
        description: "Full rebuild",
        features: [
            "Split out topics into individual pages",
            "Introduced bookmarking links locally",
            "Added version history",
            "Added contributors page",
            "Removed a lot of broken links",
            "Removed hard coded links and made into a seperate API",
            "Rebuilt the application from the ground up to enhance speed and performance",
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
