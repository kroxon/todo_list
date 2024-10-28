import Project from './project.js';
import Task from './task.js';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { getAllTasks } from './utils.js';


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
            displayTasks(project, projects);
            setSelectedProject(project);
        }
        )
        projectsList.appendChild(projectElement);
    });
}

export function displayTasks(project, allProjects) {
    const tasksList = document.querySelector(".tasks");
    tasksList.innerHTML = "";

    project.tasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.classList.add('task-element');

        const taskCheck = document.createElement("input");
        taskCheck.type = "checkbox";

        const taskName = document.createElement("div");
        taskName.classList.add('title');
        taskName.textContent = task.title;

        const taskProjectName = document.createElement('div');
        taskProjectName.classList.add('projectName');

        allProjects.forEach(proj => {
            if (proj.tasks.includes(task))
                taskProjectName.textContent = proj.name;
        });

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
        taskElement.appendChild(taskProjectName);
        taskElement.appendChild(taskDate);
        taskElement.appendChild(taskPriority);
        tasksList.appendChild(taskElement);
    });
}

export function initial(projects, onDeleteProject, project, setSelectedProject) {
    displayProjects(projects, onDeleteProject, setSelectedProject);
    displayTasks(project, projects);
    document.getElementById('actualProject').textContent = project.name;
}

export function addEditTaskDialog(allProjects, onTaskAdded, selectedProject, editTask = null) {
    const dialog = document.createElement('dialog');
    dialog.classList.add('add-task-dialog');

    const form = document.createElement('form');
    form.action = "";

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Task Title:';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    titleInput.required = true;

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Task description:';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.name = "description";

    const projectLabel = document.createElement('label');
    projectLabel.textContent = 'Project:';
    const selectProject = document.createElement('select');
    if (selectedProject.name !== "temp") {
        const selectedProjectOption = document.createElement('option');
        selectedProjectOption.value = selectedProject.name;
        selectedProjectOption.innerHTML = selectedProject.name;
        selectProject.appendChild(selectedProjectOption);
    }
    allProjects.forEach(project => {
        if (project !== selectedProject) {
            const opt = document.createElement('option');
            opt.value = project.name;
            opt.innerHTML = project.name;
            selectProject.appendChild(opt);
        }
    });

    const dateContainer = document.createElement('div');
    const dateLabel = document.createElement('label');
    dateLabel.textContent = "Select date";
    const dateInput = document.createElement('input');
    dateInput.required = true;
    dateInput.type = "date";
    dateContainer.appendChild(dateLabel);
    dateContainer.appendChild(dateInput);

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    const selectPriority = document.createElement('select');
    ["low", "medium", "high"].forEach(
        element => {
            const opt = document.createElement('option');
            opt.value = element;
            opt.innerHTML = element;
            selectPriority.appendChild(opt);
        }
    )

    const cancelTaskBtn = document.createElement('button');
    cancelTaskBtn.textContent = "Cancel";
    cancelTaskBtn.value = "false";
    cancelTaskBtn.formmethod = "dialog";

    const saveTaskBtn = document.createElement('button');
    saveTaskBtn.textContent = "Save";
    saveTaskBtn.id = "saveTaskBtn";
    saveTaskBtn.value = "true";

    form.appendChild(cancelTaskBtn);
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(projectLabel);
    form.appendChild(selectProject);
    form.appendChild(dateContainer);
    form.appendChild(priorityLabel);
    form.appendChild(selectPriority);
    form.appendChild(saveTaskBtn);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (form.checkValidity()) {
            const tTitle = titleInput.value;
            const tDescription = descriptionInput.value;
            const tProject = allProjects.find(pr => {
                return selectProject.options[selectProject.selectedIndex].text === pr.name;
            });
            const tDate = dateInput.value;
            const tPriority = selectPriority.options[selectPriority.selectedIndex].text;

            const newTask = new Task(tTitle, tDescription, tDate, tPriority);
            onTaskAdded(tProject, allProjects, newTask);
            dialog.close();
            form.reset();
            if (selectedProject.name = "temp")
                selectedProject = getAllTasks(allProjects);
            displayTasks(selectedProject, allProjects);

        }
    });

    dialog.appendChild(form);

    document.body.appendChild(dialog);


    dialog.showModal();

    return

}