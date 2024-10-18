import Project from "./project";

export function getAllTasks(projects) {
    const tempProject = new Project("temp");
    projects.forEach(project => {
        tempProject.tasks.push(...project.tasks)
    });
    return tempProject;
}