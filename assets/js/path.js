import { DataCounter } from "./show/datacounter.js";
import { Projects } from "./show/projects.js";
import { ShowSkills } from "./show/skills.js";

export default function Path() {
    function decidePath() {
        const element = document.querySelector(".projects");
        return element ? true : false;
    }

    if (decidePath()) {
        Projects();
    } else {
        ShowSkills();
    }

    DataCounter(decidePath());
}