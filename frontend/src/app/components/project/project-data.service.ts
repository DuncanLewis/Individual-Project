import { Injectable } from '@angular/core';

@Injectable()
export class ProjectDataService {

    projects: Project[] = [];

    constructor() { }

    addProject(project: Project): ProjectDataService {
        this.projects.push(project);
        return this;
    }

    deleteProjectById(id: string) : ProjectDataService {
        this.projects = this.projects
            .filter(project => project.id !== id);
        return this;
    }

    updateProjectById(id: string, values: Object = {}): Project {
        let project = this.getProjectById(id);
        if (!project) {
            return null;
        }
        Object.assign(project, values);
        return todo;
    }

    // Simulate GET /project
    getAllProjects(): Todo[] {
        return this.projects;
    }

    // Simulate GET /todos/:id
    getProjectById(id: string): Todo {
        return this.projects
            .filter(project => project.id === id)
            .pop();
    }
}
