import { dataBase } from "./database.js";

export function ShowProjectsInHome() {
    
    function getDatas() {
        const datas = dataBase.map(data => {
            const {title, description, image, links} = data;
            const {github, website} = links;
            
            return {
                title, description, image, github, website
            }
        })
        return datas;
    }

    function show() {
        const datas = getDatas();
        const projectsItems = document.querySelector(".projects-items");
        
        datas.forEach(data => {
            const {title, description, image, github, website} = data;

            const li = `
            <li class="project-item transition-transform">
                <div class="project-header">
                    <img src=${image} alt="Visualização do site moveis customizados.">
                </div>
                
                <div class="project-body">
                    <h3 class="fonte-projeto">${title}</h3>
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
            projectsItems.innerHTML += li; 
        })
    }

    return show();
}