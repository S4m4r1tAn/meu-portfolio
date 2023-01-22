export const DataCounter = (isProjects) => {
    if(isProjects) {
      return countedProjects();
    } 

    return countedSkills();
}

const countedProjects = () => {
    const getLengthProjects = document.querySelector(".projects-items").childElementCount;
    const getNumberOfProjects = document.querySelector('[data-datas="length"]')
    getNumberOfProjects.innerText = getLengthProjects;
}

const countedSkills = () => {
    const getLength = document.querySelector(".skills-items").childElementCount;
    const container = document.querySelector('.skills-counter');
    container.innerText = getLength;
}