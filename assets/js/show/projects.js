import { projects } from "../database/projects.js";
import { modal } from "./modal.js";

export function ShowProjects() {
    const projectsContainer = document.querySelector(".projects-items");
    
    projects.forEach(datas => {
        const { title, description, image, links } = datas;
        const { github, website } = links;

        const li = `
            <li class="project-item transition-transform">
                <div class="project-header">
                    <img src=${image} alt="Visualização do site moveis customizados.">
                    <button class="project-see-more">Ver mais</button>
                </div>
            
                <div class="project-body">
                    <h3 class="fonte-projeto title">${title}</h3>
                    <p class="fonte-projeto-descricao">${description}</p>
                
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
        projectsContainer.innerHTML += li;
    });

    projectsContainer.addEventListener("click", (event) => {
        const {target} = event;

        if(target.localName === 'button') {
            const li = target.parentNode.parentNode;
            modal(projects, li);
        }
    })
}