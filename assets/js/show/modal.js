export function modal(projects, li) {
    const modalContainer = document.querySelector(".modal-area");
    const modal = modalContainer.querySelector(".modal");
    
    modalContainer.classList.add("active");
    
    function content() {
        const title = li.querySelector(".title").innerText;
        const data = datas(title);
        showContent(...data);
    }
    
    function datas(titleSearch) {
        const infos = projects.filter(data => {
            if(titleSearch === data.title) {
                const { title, description, image, tags, links, isResponsive } = data;
    
                return {
                    title, description, image, tags, isResponsive, links,
                }
            }
        })
        
        return infos;
    } 
    
    function showContent({ title, description, image, tags, isResponsive, links }) {
        const {github, website} = links;
        const inner = `
        <div class="modal-banner">
            <img src=${image} alt="#">
            <button class="modal-close">x</button>
        </div>

        <div class="modal-content">
            <h2 class="modal-title">${title}</h2>
            
            <div class="modal-tags"></div>
            
            <p class="modal-description">${description}</p>
        
            <ul class="modal-links">
            <li class="modal-link-item">
            <a href=${github} class="modal-link">Github</a>
                </li>
                
                <li class="modal-link-item">
                <a href=${website} class="modal-link">Website</a>
                </li>
                </ul>
                </div>
                `
                
        modal.innerHTML = inner;
        createSpan(tags);
    }
    
    function createSpan(tags) {
        const tagsContainer = document.querySelector(".modal-tags");

        tags.forEach(tags => {
            tagsContainer.innerHTML += `<span class="modal-tag-item">${tags}</span>`
        })
    }

    function closeModal() {
        modalContainer.classList.remove("active");
    }

    modal.addEventListener("click", (event) => {
        const {target} = event;

        if(target.className === 'modal-close') {
            closeModal();
        }
    })

    content();
}