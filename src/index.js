import './styles.css';
import Project from "./project.js";
import projects from "./test.js";
import * as Display from './display.js';
import { getAllTasks, removeProject, addProject } from './utils.js';


let selectedProject = projects[0];

const newProjectDialog = document.getElementById('addProjectDialog');
const confirmBtn = document.getElementById('confirmBtn');
const allTasksBtn = document.getElementById('all');
const todayTasksBtn = document.getElementById('today');
const upcomingTasksBtn = document.getElementById('upcoming');

const addTaskBtn = document.getElementById('addTaskBtn');
const sortByPriorityBtn = document.getElementById('sortByPriorityBtn');
const sortByDateBtn = document.getElementById('sortByDateBtn');


Display.initial(projects, removeProject, selectedProject)


confirmBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const title = document.querySelector('input[name="title"]').value;
    const newProject = new Project(title);
    projects.push(newProject);
    newProjectDialog.close();
    const form = newProjectDialog.querySelector('form');
    form.reset();
    Display.displayProjects(projects, removeProject);
});


document.getElementById('addProjectBtn').addEventListener('click', function () {
    newProjectDialog.showModal();
});

allTasksBtn.addEventListener("click", () => {
    selectedProject = getAllTasks(projects);
    Display.displayTasks(selectedProject);
});