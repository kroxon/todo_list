import './styles.css';

import Project from "./project.js";

import projects from "./test.js";

import * as Display from './display.js';

Display.displayProjects(projects);

Display.displayTasks(projects[0]);