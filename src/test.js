import Project from "./project.js";

const projects = [];

const project1 = new Project("Project Alpha");
const project2 = new Project("Project Beta");
const project3 = new Project("Project Gamma");

project1.addTask("Task 1.1", "Description for Task 1.1", "2024-10-20", "high");
project1.addTask("Task 1.2", "Description for Task 1.2", "2024-10-22", "medium");
project1.addTask("Task 1.3", "Description for Task 1.3", "2024-10-24", "low");

project2.addTask("Task 2.1", "Description for Task 2.1", "2024-10-21", "medium");
project2.addTask("Task 2.2", "Description for Task 2.2", "2024-10-23", "high");
project2.addTask("Task 2.3", "Description for Task 2.3", "2024-10-25", "low");

project3.addTask("Task 3.1", "Description for Task 3.1", "2024-10-26", "high");
project3.addTask("Task 3.2", "Description for Task 3.2", "2024-10-27", "medium");
project3.addTask("Task 3.3", "Description for Task 3.3", "2024-10-28", "low");

projects.push(project1);
projects.push(project2);
projects.push(project3);

// console.log(projects);

export default projects;