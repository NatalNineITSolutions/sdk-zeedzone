import AxiosClient from "../../axios/axiosInstance";

export default class Tasks {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

   getAllTasks() {
    return this.axiosClient.request('get', `/task`)
  }

  getAllSubTasksByTaskId(id: number) {
    return this.axiosClient.request('get', `/task/${id}/subtasks`)
  }
  getSubTasksByTaskIdAndSubTaskId(taskid: number, subTaskId: number) {
    return this.axiosClient.request('get', `/task/${taskid}/subtasks/${subTaskId}`)
  }

  addTask(data: object) {
    return this.axiosClient.request('post', `/task`, data)
  }

  editTask(taskID: number, data: object) {
    return this.axiosClient.request('post', `/task/${taskID}`, data)
  }

  deleteTask(taskID: number) {
    return this.axiosClient.request('post', `/task/${taskID}`)
  }

  

  

}


