import './styles.css';
import Project from "./project.js";
import projects from "./test.js";
import * as Display from './display.js';
import { getAllTasks, removeProject, addProject, addTask, getAllTodayTasks, getAllUpcomingTasks } from './utils.js';


let selectedProject = projects[0];
function setSelectedProject(project) {
    selectedProject = project;
    document.getElementById('actualProject').textContent = project.name;
}

function addDefaultProject(newProject) {
    setSelectedProject(newProject);
    projects.push(newProject);
    Display.displayProjects(projects, removeProject, setSelectedProject, addDefaultProject);
}

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


Display.initial(projects, removeProject, selectedProject, setSelectedProject, addDefaultProject)

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
    Display.displayProjects(projects, removeProject, setSelectedProject, addDefaultProject);
});

cancelBtn.addEventListener('click', (event) => {
    formAddProject.reset();
    addProjectDialog.close();
});

allTasksBtn.addEventListener("click", () => {
    setSelectedProject(getAllTasks(projects));
    actualProject.textContent = "All projects";
    Display.displayTasks(selectedProject, projects);
});

todayTasksBtn.addEventListener('click', () => {
    setSelectedProject(getAllTodayTasks(projects));
    actualProject.textContent = "Today";
    Display.displayTasks(selectedProject, projects);
});

upcomingTasksBtn.addEventListener('click', () => {
    setSelectedProject(getAllUpcomingTasks(projects));
    actualProject.textContent = "Upcoming";
    Display.displayTasks(selectedProject, projects);
});

sortByPriorityBtn.addEventListener('click', () => {
    selectedProject.sortByPriorityTasks();
    Display.displayTasks(selectedProject, projects);
});

sortByDateBtn.addEventListener('click', () => {
    selectedProject.sortByDateTasks();
    Display.displayTasks(selectedProject, projects);
});

addTaskBtn.addEventListener("click", () => {
    Display.addEditTaskDialog(projects, addTask, selectedProject)
})