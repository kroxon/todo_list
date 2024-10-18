import Project from './project.js';
import Task from './task.js';

export function displayProjects(projects) {
    console.log(projects);
    const projectsList = document.querySelector(".projects");
    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project-element");
        const projectName = document.createElement("div");
        projectName.textContent = project.name;
        const projectDelete = document.createElement("button");
        projectDelete.classList.add("project-delete")
        projectDelete.innerHTML = `<span class="material-icons">delete</span>`;
        projectDelete.addEventListener("click", () => removeProject(index));
        projectElement.appendChild(projectName);
        projectElement.appendChild(projectDelete);
        projectsList.appendChild(projectElement);
    });
}

export function displayTasks(project) {
    console.log(project);
    const tasksList = document.querySelector(".tasks");
    project.tasks.forEach(task => {
        // need to be prettier 
        const taskName = document.createElement("div");
        taskName.textContent = task.priority;
        tasksList.appendChild(taskName);
    });
}

