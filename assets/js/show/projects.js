import { projects } from "../database/projects.js";
import { modal } from "./modal.js";

export function Projects() {
    const projectsContainer = document.querySelector(".projects-items");

    function start() {
        getAll();
        isModalButton();
    }

    function getAll() {
        projects.forEach(datas => {
            show(datas);
        });
    }

    function structure(datas) {
        const { title, description, image, links } = datas;
        const { github, website } = links;
    
        const li = `
            <li class="project-item transition-transform">
                <div class="project-header">
                    <img src=${image} alt="Visualização do site moveis customizados.">
                    <button class="project-see-more">Ver mais</button>
                </div>
            
                <div class="project-body">
                    <div class="project-wrapper-text">
                        <h2 class="fonte-projeto title">${title}</h2>
                        <p class="fonte-projeto-descricao">${description}</p>
                    </div>
                    <div class="project-resume-ancoras">
                        <a href=${website} target="_blank" title="Ver site">
                            <i class="ph-globe"></i>
                        </a>

                        <a href=${github} target="_blank" title="Ver github">
                            <i class="ph-github-logo-fill"></i>
                        </a>
                    </div>
                </div>
            </li>
        `

        return li;
    }

    function show(datas) {
        projectsContainer.innerHTML += structure(datas);
    }

    function isModalButton() {
        projectsContainer.addEventListener("click", (event) => {
        const {target} = event;

        if(target.localName === 'button') {
            const li = target.parentNode.parentNode;
            modal(projects, li);
        }
    })}

    start();
}