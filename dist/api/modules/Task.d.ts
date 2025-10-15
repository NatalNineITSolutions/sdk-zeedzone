import AxiosClient from "../../axios/axiosInstance";
export default class Tasks {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    getAllTasks(): Promise<any>;
    getAllSubTasksByTaskId(id: number): Promise<any>;
    getSubTasksByTaskIdAndSubTaskId(taskid: number, subTaskId: number): Promise<any>;
    addTask(data: object): Promise<any>;
    editTask(taskID: number, data: object): Promise<any>;
    deleteTask(taskID: number): Promise<any>;
}
//# sourceMappingURL=Task.d.ts.map