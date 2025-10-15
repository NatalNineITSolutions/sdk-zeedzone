"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Projects {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getAllProjects() {
        return this.axiosClient.request('get', '/project');
    }
    getMyProjects(id) {
        return this.axiosClient.request('get', `/project/${id}`);
    }
    getProjectsByWithQuery() {
        return this.axiosClient.request('get', `/project`);
    }
    getProjectById(id) {
        return this.axiosClient.request('get', `/project/${id}`);
    }
    getProjectTasks(projectID) {
        return this.axiosClient.request('get', `/project/${projectID}`);
    }
    addProject(data) {
        return this.axiosClient.request('post', `/project`, data);
    }
    editProject(id, data) {
        return this.axiosClient.request('put', `/project/${id}`, data);
    }
    deleteProject(id) {
        return this.axiosClient.request('delete', `/project/${id}`);
    }
}
exports.default = Projects;
//# sourceMappingURL=Projects.js.map