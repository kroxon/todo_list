import Project from './project.js';
import Task from './task.js';

export function displayProjects(projects) {
    console.log(projects);
    const projectsList = document.querySelector(".projects");
    projects.forEach(project => {
        const projectName = document.createElement("div");
        projectName.textContent = project.name;
        projectsList.appendChild(projectName);
    });
}

export function displayTasks(project) {
    console.log(project);
    const tasksList = document.querySelector(".tasks");
    project.tasks.forEach(task => {
        // need to be prettier 
        const taskName = document.createElement("div");
        taskName.textContent = task.prettyDate();
        tasksList.appendChild(taskName);
    });
}
