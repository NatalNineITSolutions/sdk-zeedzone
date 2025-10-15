"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tasks {
    constructor(ApiKey) {
        this.axiosClient = ApiKey;
    }
    getAllTasks() {
        return this.axiosClient.request('get', `/task`);
    }
    getAllSubTasksByTaskId(id) {
        return this.axiosClient.request('get', `/task/${id}/subtasks`);
    }
    getSubTasksByTaskIdAndSubTaskId(taskid, subTaskId) {
        return this.axiosClient.request('get', `/task/${taskid}/subtasks/${subTaskId}`);
    }
    addTask(data) {
        return this.axiosClient.request('post', `/task`, data);
    }
    editTask(taskID, data) {
        return this.axiosClient.request('post', `/task/${taskID}`, data);
    }
    deleteTask(taskID) {
        return this.axiosClient.request('post', `/task/${taskID}`);
    }
}
exports.default = Tasks;
//# sourceMappingURL=Task.js.map