import Project from './project.js';
import Task from './task.js';

export function displayProjects(projects, onDeleteProject, setSelectedProject) {
    console.log(projects);
    const projectsList = document.querySelector(".projects");
    projectsList.innerHTML = "";
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
                displayProjects(projects, onDeleteProject, setSelectedProject);
            }, 500);

        });
        projectElement.appendChild(projectName);
        projectElement.appendChild(projectDelete);

        // display tasks for selected project
        projectElement.addEventListener('click', () => {
            displayTasks(project);
            setSelectedProject(project);
        }
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
        const taskElement = document.createElement("div");
        taskElement.classList.add('task-element');

        const taskCheck = document.createElement("input");
        taskCheck.type = "checkbox";

        const taskName = document.createElement("div");
        taskName.classList.add('title');
        taskName.textContent = task.title;

        const taskDate = document.createElement('div');
        taskDate.classList.add('date');
        taskDate.textContent = task.prettyDate();

        const taskPriority = document.createElement('button');
        taskPriority.classList.add('task_priority');
        switch (task.priority) {
            case 'low':
                taskPriority.classList.add('low');
                break;
            case 'medium':
                taskPriority.classList.add('medium');
                break;
            case 'high':
                taskPriority.classList.add('high');
                break;
        }
        taskPriority.innerHTML = `<span class="material-icons">radio_button_checked </span>`;

        taskElement.appendChild(taskCheck);
        taskElement.appendChild(taskName);
        taskElement.appendChild(taskDate);
        taskElement.appendChild(taskPriority);
        tasksList.appendChild(taskElement);
    });
}

export function initial(projects, onDeleteProject, project, setSelectedProject) {
    displayProjects(projects, onDeleteProject, setSelectedProject);
    displayTasks(project);
    document.getElementById('actualProject').textContent = project.name;
}

