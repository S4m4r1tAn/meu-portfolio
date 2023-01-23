import { skills } from "../database/skiils.js";

export function ShowSkills() {
    const skillsContainer = document.querySelector(".skills-items");
    skills.forEach(datas => {
        const { title, description, image } = datas;

        const li = `
        <li class="skill-item transition-transform">
            <div class="skill-header">
                <img src=${image} alt="#">
            </div>

            <div class="skill-body">
                <h3 class="fonte-projeto">${title}</h3>
                <p class="fonte-projeto-descricao">${description}</p>
            </div>
        </li>
        `

        skillsContainer.innerHTML += li;
    })
}