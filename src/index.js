import './styles.css';

import Project from "./project.js";

import projects from "./test.js";

import * as Display from './display.js';

import { getAllTasks } from './utils.js';

Display.displayProjects(projects);

const projects2 = projects;

let selectedProject = projects[0];

Display.displayTasks(getAllTasks(projects))