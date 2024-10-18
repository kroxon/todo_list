import Project from './project.js';
import Task from './task.js';

export function displayProjects(projects, onDeleteProject) {
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

        // remove project
        projectDelete.addEventListener("click", () => {
            projectElement.classList.add("fade-out");
            setTimeout(() => {
                onDeleteProject(project, projects);
                projectsList.innerHTML = "";
                displayProjects(projects, onDeleteProject);
            }, 500);

        });
        projectElement.appendChild(projectName);
        projectElement.appendChild(projectDelete);

        // display tasks for selected project
        projectElement.addEventListener('click', () =>
            displayTasks(project)
        )
        projectsList.appendChild(projectElement);
    });
}

export function displayTasks(project) {
    console.log(project);
    const tasksList = document.querySelector(".tasks");
    tasksList.innerHTML = "";
    project.tasks.forEach(task => {
        // need to be prettier 
        const taskName = document.createElement("div");
        taskName.textContent = task.priority;
        tasksList.appendChild(taskName);
    });
}

export function initial(projects, onDeleteProject, project) {
    displayProjects(projects, onDeleteProject);
    displayTasks(project);
}

