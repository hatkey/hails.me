// src/models/Skills.js
var m = require("mithril");

let Proficiencies = {
    HIGH:   "high",
    MEDIUM: "medium",
    LOW:    "low"
}

var Skills = {
    skills: [],
    getSkills: function() {
        let self = this;
        if (self.skills.length === 0) {
            return m.request({
                method: "GET",
                url: "api/skills"
            })
            .then(function(result) {
                result.forEach(element => {
                    self.skills.push({
                        name: element.name,
                        proficiency: Proficiencies[element.proficiency]
                    });
                });
            })
            .catch(function(error) { });
        }
    }
};

module.exports = Skills;
