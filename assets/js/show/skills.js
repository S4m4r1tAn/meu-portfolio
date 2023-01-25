import { skills } from "../database/skiils.js";

export function ShowSkills() {
    const skillsContainer = document.querySelector(".skills-items");

    function start() {
        getAll();
    }

    function getAll() {
        skills.forEach(datas => {
            show(datas);
        })
    }

    function structure(datas) {
        const { title, description, image } = datas;
    
        const li = `
        <li class="skill-item transition-transform">
            <div class="skill-header">
                <img src=${image} alt="#">
            </div>

            <div class="skill-body">
                <h2 class="fonte-projeto">${title}</h2>
                <p class="fonte-projeto-descricao">${description}</p>
            </div>
        </li>
        `
        return li;
    }

    function show(datas) {
        skillsContainer.innerHTML += structure(datas);
    }

    start();
}