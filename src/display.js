import Project from './project.js';
import Task from './task.js';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { getAllTasks, getAllTodayTasks, getAllUpcomingTasks } from './utils.js';


export function displayProjects(projects, onDeleteProject, setSelectedProject, addProject) {
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
                displayProjects(projects, onDeleteProject, setSelectedProject, addProject);
                if (!projects.length) {
                    const defaultProject = new Project("Default Project");
                    addProject(defaultProject);
                    displayTasks(defaultProject, projects)
                }
            }, 500);
        });
        projectElement.appendChild(projectName);
        projectElement.appendChild(projectDelete);

        // display tasks for selected project
        projectElement.addEventListener('click', () => {
            project.sortByDateTasks();
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

        let projTask = new Project;
        allProjects.forEach(proj => {
            if (proj.tasks.includes(task))
                projTask = proj;
        });
        taskProjectName.textContent = projTask.name;

        taskCheck.addEventListener("click", (event) => {
            event.stopPropagation();
            if (confirm(`Complete the task ${task.title}?`)) {
                projTask.removeTask(task);
                displayTasks(project, allProjects);
            }
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

        taskElement.addEventListener('click', () => {
            addEditTaskDialog(allProjects, null, project, task);
        });

        taskElement.appendChild(taskCheck);
        taskElement.appendChild(taskName);
        taskElement.appendChild(taskProjectName);
        taskElement.appendChild(taskDate);
        taskElement.appendChild(taskPriority);
        tasksList.appendChild(taskElement);
    });
}

export function initial(projects, onDeleteProject, project, setSelectedProject, addProject) {
    displayProjects(projects, onDeleteProject, setSelectedProject, addProject);
    displayTasks(project, projects);
    document.getElementById('actualProject').textContent = project.name;
}

export function addEditTaskDialog(allProjects, onTaskAdded = null, selectedProject, editTask = null) {
    let dialog = document.querySelector('.add-task-dialog');
    if (!dialog) {
        dialog = document.createElement('dialog');
        dialog.classList.add('add-task-dialog');
        document.body.appendChild(dialog);

        dialog.addEventListener('close', () => {
            dialog.remove();
        });
    } else {
        dialog.innerHTML = '';
    }
    dialog.classList.add('add-task-dialog');

    const form = document.createElement('form');
    form.action = "";
    form.reset();

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
    selectProject.id = "selectedProjOpt";
    if (selectedProject && selectedProject.name !== "temp" && selectedProject.name !== "tempActual" && selectedProject.name !== "tempUpcoming" && editTask === null) {
        const selectedProjectOption = document.createElement('option');
        selectedProjectOption.value = selectedProject.name;
        selectedProjectOption.innerHTML = selectedProject.name;
        selectProject.appendChild(selectedProjectOption);
    }
    allProjects.forEach(project => {
        const opt = document.createElement('option');
        opt.value = project.name;
        opt.innerHTML = project.name;
        selectProject.appendChild(opt);
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
    selectPriority.id = "selectPriority";
    ["low", "medium", "high"].forEach(
        element => {
            const opt = document.createElement('option');
            opt.value = element;
            opt.innerHTML = element;
            selectPriority.appendChild(opt);
        }
    )

    const completeChBx = document.createElement('input');
    completeChBx.type = "checkbox";

    const cancelTaskBtn = document.createElement('button');
    cancelTaskBtn.textContent = "Cancel";
    cancelTaskBtn.value = "false";
    cancelTaskBtn.formmethod = "dialog";

    const saveContainer = document.createElement('div');
    const saveTaskBtn = document.createElement('button');
    saveTaskBtn.textContent = "Add task";
    saveTaskBtn.id = "saveTaskBtn";
    saveTaskBtn.value = "true";
    saveContainer.appendChild(saveTaskBtn);

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

    dialog.appendChild(form);

    if (editTask !== null) {
        titleInput.value = editTask.title;
        descriptionInput.value = editTask.description;
        const editTaskProject = allProjects.find(project =>
            project.tasks.some(task => task.id === editTask.id)
        );

        selectElement("selectedProjOpt", editTaskProject.name)
        dateInput.value = formatDateToInputValue(editTask.date);
        selectElement("selectPriority", editTask.priority);
        completeChBx.value = editTask.completed;
        form.appendChild(completeChBx);
        completeChBx.addEventListener('click', () => {
            if (confirm(`Complete the task ${editTask.title}?`)) {
                editTaskProject.removeTask(editTask);
                dialog.close();
                if (selectedProject.name === "temp")
                    selectedProject = getAllTasks(allProjects);
                if (selectedProject.name === "tempActual")
                    selectedProject = getAllTodayTasks(allProjects);
                if (selectedProject.name === "tempUpcoming")
                    selectedProject = getAllUpcomingTasks(allProjects);
                selectedProject.sortByDateTasks();
                displayTasks(selectedProject, allProjects);
            }
        });

        saveTaskBtn.textContent = "Save changes";
        const deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.textContent = "Delete";
        deleteTaskBtn.id = "deleteTaskBtn";
        saveContainer.appendChild(deleteTaskBtn);

        deleteTaskBtn.addEventListener('click', () => {
            if (confirm(`Remove task ${editTask.title}?`)) {
                editTaskProject.removeTask(editTask);
                dialog.close();
                if (selectedProject.name === "temp")
                    selectedProject = getAllTasks(allProjects);
                if (selectedProject.name === "tempActual")
                    selectedProject = getAllTodayTasks(allProjects);
                if (selectedProject.name === "tempUpcoming")
                    selectedProject = getAllUpcomingTasks(allProjects);
                selectedProject.sortByDateTasks();
                displayTasks(selectedProject, allProjects);
            }
        });
    }

    form.appendChild(saveContainer);


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

            if (!editTask) {
                onTaskAdded(tProject, allProjects, newTask);
            } else {
                console.log(`editet project ${tProject.name}, edited task ${editTask.title}`)
                tProject.editTask(editTask.id, newTask);
            }
            dialog.close();
            if (selectedProject.name === "temp")
                selectedProject = getAllTasks(allProjects);
            if (selectedProject.name === "tempActual")
                selectedProject = getAllTodayTasks(allProjects);
            if (selectedProject.name === "tempUpcoming")
                selectedProject = getAllUpcomingTasks(allProjects);
            selectedProject.sortByDateTasks();
            displayTasks(selectedProject, allProjects);

        }
    });

    function selectElement(id, valueToSelect) {
        const element = document.getElementById(id);
        if (element) {
            const optionExists = Array.from(element.options).some(option => option.value === valueToSelect);
            if (optionExists) {
                element.value = valueToSelect;
                console.log(`Change ${element} value to ${valueToSelect}`)
            } else {
                console.log(`Option ${valueToSelect} doesn't exist in ${id}`);
            }
        } else
            console.log("doesn't exist!")
    }

    function formatDateToInputValue(timestamp) {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }



    dialog.showModal();

    return

}