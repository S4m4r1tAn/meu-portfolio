import { DataCounter } from "./datacounter.js";
import { ShowProjectsInHome } from "./showprojectsinhome.js";

export default function Path() {
    function containsClassProjects() {
        const element = document.querySelector(".projects");
        return element ? true : false;
    }

    if(containsClassProjects()) {
        ShowProjectsInHome();
    } else {
        console.log("Nada por aqui")
    }

    DataCounter(containsClassProjects());
}