import Project from "./project";

export function getAllTasks(projects) {
    const tempProject = new Project("temp");
    projects.forEach(project => {
        tempProject.tasks.push(...project.tasks)
    });
    tempProject.sortByDateTasks();
    return tempProject;
}

export function removeProject(projectToDelete, projects) {
    const index = projects.indexOf(projectToDelete);
    if (index !== -1) {
        projects.splice(index, 1);
    }
}

export function addTask(project, projects, task) {
    const index = projects.indexOf(project);
    projects[index].tasks.push(task);
}