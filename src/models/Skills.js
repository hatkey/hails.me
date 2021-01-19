// src/models/Skills.js
var m = require("mithril");

let PROFICIENCIES = {
    High:   "high",
    Medium: "medium",
    Low:    "low"
}

var Skills = {
    skills: [
        {name: "Java",          proficiency: PROFICIENCIES.High},
        {name: "C/C++",         proficiency: PROFICIENCIES.High},
        {name: "HTML",          proficiency: PROFICIENCIES.High},
        {name: "(S)CSS",        proficiency: PROFICIENCIES.High},
        {name: "JavaScript",    proficiency: PROFICIENCIES.High},
        {name: "PHP",           proficiency: PROFICIENCIES.High},
        {name: "Git",           proficiency: PROFICIENCIES.High},
        {name: "REST APIs",     proficiency: PROFICIENCIES.High},
        {name: "Mithril",       proficiency: PROFICIENCIES.Medium},
        {name: "Spring",        proficiency: PROFICIENCIES.Medium},
        {name: "Thymeleaf",     proficiency: PROFICIENCIES.Medium},
        {name: "MySQL",         proficiency: PROFICIENCIES.Medium},
        {name: "Bootstrap",     proficiency: PROFICIENCIES.Medium},
        {name: "NPM",           proficiency: PROFICIENCIES.Medium},
        {name: "jQuery",        proficiency: PROFICIENCIES.Low},
        {name: "Angular",       proficiency: PROFICIENCIES.Low},
        {name: "TypeScript",    proficiency: PROFICIENCIES.Low},
        {name: "webpack",       proficiency: PROFICIENCIES.Low}
    ]
};

module.exports = Skills;
