export function modal(projects, li) {
    const modalContainer = document.querySelector(".modal-area");
    const modalContent = modalContainer.querySelector(".modal");
    const page = document.querySelector(".page");
    const pageChildren = Array.from(page.children); 
    let previousActiveElement;

    function start() {
        const data = search();
        createStructure(...data);
        focusInModal();
        previousActiveElement = document.activeElement;
        modalContainer.classList.add("active");
        isCloseModal();
    }

    function focusInModal() {
        pageChildren.forEach(children => {
            if(children !== modalContainer) {
                children.inert = true;
            }
        })
    }
    
    function search() {
        const title = li.querySelector(".title").innerText;
        const infos = projects.filter(data => {
            if(title === data.title) {
                const { title, description, image, tags, links } = data;
    
                return {
                    title, description, image, tags, links,
                }
            }
        })
        
        return infos;
    } 
    
    function createStructure({ title, description, image, tags, links }) {
        const content = `
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
                    <a href=${links.github} class="modal-link" target="_blank">Github</a>
                </li>
                
                <li class="modal-link-item">
                    <a href=${links.website} class="modal-link" target="_blank">Website</a>
                </li>
            </ul>
        </div>
        `

        show(content, tags)
    }
            
    function show(content, tags) {
        modalContent.innerHTML = content;
        createSpan(tags);
    }
    
    function createSpan(tags) {
        const fragment = new DocumentFragment();
        const tagsContainer = document.querySelector(".modal-tags");
        
        tags.forEach(tag => {
            const span = document.createElement("span");
            span.setAttribute("class", "modal-tag-item");
            span.innerText = tag;
            fragment.appendChild(span);
        })

        tagsContainer.appendChild(fragment);
    }

    function isCloseModal() {
        modalContent.addEventListener("click", (event) => {
            const {target} = event;
    
            if(target.className === 'modal-close') {
                closeModal();
            }
        })
    }

    function closeModal() {
        modalContainer.classList.remove("active");
        pageChildren.forEach(children => children.removeAttribute("inert"));
        previousActiveElement.focus();
    }

    start();
}