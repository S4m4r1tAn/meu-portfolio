export const DataCounter = (isProjects) => {
    if(isProjects) {
      return countedProjects();
    } 

    return countedSkills();
}

const countedProjects = () => {
    const getLength = document.querySelector(".projects-items").childElementCount;
    const getNumberOfProjects = document.querySelector('.projects-counter');
    getNumberOfProjects.innerText = getLength;
}

const countedSkills = () => {
    const getLength = document.querySelector(".skills-items").childElementCount;
    const container = document.querySelector('.skills-counter');
    container.innerText = getLength;
}