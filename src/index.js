import './styles.css';
import Project from "./project.js";
import projects from "./test.js";
import * as Display from './display.js';
import { getAllTasks, removeProject, addProject } from './utils.js';


let selectedProject = projects[0];

const newProjectDialog = document.getElementById('addProjectDialog');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.querySelector('button[value="false"]');
const formAddProject = newProjectDialog.querySelector('form');
const allTasksBtn = document.getElementById('all');
const todayTasksBtn = document.getElementById('today');
const upcomingTasksBtn = document.getElementById('upcoming');
const actualProject = document.getElementById('actualProject');
const addTaskBtn = document.getElementById('addTaskBtn');
const sortByPriorityBtn = document.getElementById('sortByPriorityBtn');
const sortByDateBtn = document.getElementById('sortByDateBtn');


Display.initial(projects, removeProject, selectedProject)

document.getElementById('addProjectBtn').addEventListener('click', function () {
    newProjectDialog.showModal();
});

confirmBtn.addEventListener('click', function (event) {
    if (!formAddProject.checkValidity()) {
        formAddProject.reportValidity();
        return;
    }
    const title = formAddProject.querySelector('input[name="title"]').value.trim();
    const newProject = new Project(title);
    projects.push(newProject);
    newProjectDialog.close();
    formAddProject.reset();
    Display.displayProjects(projects, removeProject);
});

cancelBtn.addEventListener('click', (event) => {
    formAddProject.reset();
    addProjectDialog.close();
});

allTasksBtn.addEventListener("click", () => {
    selectedProject = getAllTasks(projects);
    actualProject.textContent = "All projects";
    Display.displayTasks(selectedProject);
});

todayTasksBtn.addEventListener('click', () => {

});

upcomingTasksBtn.addEventListener('click', () => {

});

sortByPriorityBtn.addEventListener('click', () => {
    selectedProject.sortByPriorityTasks();
    Display.displayTasks(selectedProject);
});

sortByDateBtn.addEventListener('click', () => {
    selectedProject.sortByDateTasks();
    Display.displayTasks(selectedProject);
});