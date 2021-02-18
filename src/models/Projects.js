// src/models/Projects.js
var m = require("mithril");

var Projects = {
    projects: [],
    getProjects: function() {
        let self = this;
        if (self.projects.length === 0) {
            return m.request({
                method: "GET",
                url: "api/projects"
            })
            .then(function(result) {
                self.projects = result;
            })
            .catch(function(error) { });
        }
    }
};

module.exports = Projects;
