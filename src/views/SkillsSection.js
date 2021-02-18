// src/views/SkillsSection.js
var m = require("mithril");
var GridList = require("./GridList");
var Skills = require("../models/Skills");

module.exports = {
    oninit: () => {Skills.getSkills()},
    view: () => (
        <section id="skills">
            <h2>skills</h2>
    
            <p><small>
                Proficiency: 
                <span class="indicator indicator-high"></span>High 
                <span class="indicator indicator-medium"></span>Medium 
                <span class="indicator indicator-low"></span>Low
                <br /><br />
            </small></p>

            <GridList>
                {Skills.skills.map(skill => (
                    <li class={skill.proficiency}>{skill.name}</li>
                ))}
            </GridList>
        </section>
    )
};
