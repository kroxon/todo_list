import Project from "./project";

export function getAllTasks(projects) {
    const tempProject = new Project("temp");
    projects.forEach(project => {
        tempProject.tasks.push(...project.tasks)
    });
    tempProject.sortByDateTasks();
    return tempProject;
}

export function getAllTodayTasks(projects) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startOfToday = today.getTime();
    const endOfToday = startOfToday + (24 * 60 * 60 * 1000) - 1;

    const tempProject = new Project("tempActual");
    projects.forEach(project => {
        project.tasks.forEach(task => {
            if (task.date >= startOfToday && task.date <= endOfToday) {
                tempProject.tasks.push(task);
            }
        });
    });
    tempProject.sortByDateTasks();
    return tempProject;
}

export function getAllUpcomingTasks(projects) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startOfToday = today.getTime();
    const endOfToday = startOfToday + (24 * 60 * 60 * 1000) - 1;

    const tempProject = new Project("tempUpcoming");
    projects.forEach(project => {
        project.tasks.forEach(task => {
            if (task.date > endOfToday) {
                tempProject.tasks.push(task);
            }
        });
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