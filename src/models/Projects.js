// src/models/Projects.js

var Projects = {
    projects: [
        {
            name: "hails.me",
            tags: ["Mithril", "Sass", "HTML"],
            description: "My personal website. You're looking at it right now!",
            links: [
                {name: "github", url: "https://github.com/hatkey/hails.me"},
                {name: "demo", url: "https://hails.me"}
            ]
        },
        {
            name: "affirmations.dev API Wrapper",
            tags: ["PHP", "Flight"],
            description: "A simple wrapper for the affirmations.dev API, built with the Flight PHP micro-framework.",
            links: [
                {name: "github", url: "https://github.com/hatkey/affirmations-api-wrapper"},
                {name: "demo", url: "https://api.hails.me/wrapper/affirmations"}
            ]
        },
        {
            name: "Mock Cinema e-Booking Site",
            tags: ["Spring Boot", "Thymeleaf", "MySQL", "JavaScript", "CSS"],
            description: "School project: A mock cinema ticket purchasing site and associated administration portal.",
            links: []
        },
        {
            name: "Musical Melee",
            tags: ["PHP", "CSS", "JavaScript"],
            description: "School project: A gamified music recommendation web app, leveraging the Spotify Web API.",
            links: []
        },
        {
            name: "Graphics Visualization",
            tags: ["Java"],
            description: "School project: A simple graphics visualization program, capable of line scan-conversion, clipping, perspective projection for 3D objects, and transformations",
            links: []
        }
    ]
};

module.exports = Projects;
