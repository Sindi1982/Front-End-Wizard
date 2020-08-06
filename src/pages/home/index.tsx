import React from "react";
import { Link } from "react-router-dom";

const topics = [
    {
        name: "JavaScript",
        route: "javascript",
    },
    {
        name: "CSS",
        route: "css",
    },
    {
        name: "HTML",
        route: "html",
    },
    {
        name: "CSS/JS",
        route: "css-js",
    },
    {
        name: "Sass",
        route: "sass",
    },
    {
        name: "UX/Design",
        route: "ux-design",
    },
    {
        name: "Best Practices",
        route: "best-practices",
    },
    {
        name: "CSS Frameworks",
        route: "css-frameworks",
    },
    {
        name: "Icons/Svg",
        route: "icons-svg",
    },
    {
        name: "Misc",
        route: "misc",
    },
];

const HomePage: React.FC = () => (
    <div className="container">
        <p className="text-center description">The best place for front end resources</p>
        <div className="topics">
            {topics.map((topic) => (
                <Link to={`/category/${topic.route}`} key={topic.name}>
                    {topic.name}
                </Link>
            ))}
        </div>
    </div>
);

export default HomePage;
