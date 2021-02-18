// src/views/ProjectsSection.js
var m = require("mithril");
var Projects = require("../models/Projects");
var Project = require("./Project");

module.exports = {
    oninit: () => {Projects.getProjects()},
    view: () => (
        <section id="projects">
            <h2>projects</h2>

            {Projects.projects.map(project => (
                <Project 
                    name={project.name}
                    tags={project.tags}
                    description={project.description}
                    links={project.links}
                />
            ))}

            <p>
                <small>
                    <strong>Note:</strong> 
                    &#8203; the code for some of the above projects may not 
                    be publicly visibile. this is usually for academic 
                    honesty reasons. if you are a potential employer, 
                    and you want to get more information about a project, 
                    you can <a href="mailto:hayley@hails.me">email me</a> :)
                </small>
            </p>
        </section>
    )
};
