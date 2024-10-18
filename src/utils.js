import Project from "./project";

export function getAllTasks(projects) {
    const tempProject = new Project("temp");
    projects.forEach(project => {
        tempProject.tasks.push(...project.tasks)
    });
    return tempProject;
}

export function removeProject(projectToDelete, projects) {
    const index = projects.indexOf(projectToDelete);
    if (index !== -1) {
        projects.splice(index, 1);
    }
}

export function addProject(name, projects) {
    const newProject = new Project(name);
    projects.push(newProject);
}

// export function addProject(projects) {
//     const newProjectDialog = document.getElementById('addProjectDialog');
//     const confirmBtn = document.getElementById('confirmBtn');

//     confirmBtn.addEventListener('click', function (event) {
//         event.preventDefault();

//         const title = document.querySelector('input[name="title"]').value;

//         const newProject = new Project(title);
//         projects.push(newProject);
//         newProjectDialog.close();

//         displayProjects(projects, removeProject);
//     });


//     document.getElementById('addProjectBtn').addEventListener('click', function () {
//         newProjectDialog.showModal();
//     });
// }
