import './styles.css';
import Project from "./project.js";
import projects from "./test.js";
import * as Display from './display.js';
import { getAllTasks, removeProject, addProject } from './utils.js';


let selectedProject = projects[0];

Display.initial(projects, removeProject, selectedProject)