import AxiosClient from "../../axios/axiosInstance";

export default class Projects {
  private axiosClient: AxiosClient;

  constructor(ApiKey: AxiosClient) {
  this.axiosClient = ApiKey;
  }

  getAllProjects() {
    return this.axiosClient.request('get', '/project')
  }

  getMyProjects(id: number) {
    return this.axiosClient.request('get', `/project/${id}`)
  }

  getProjectsByWithQuery() {
    return this.axiosClient.request('get', `/project`)
  }

  getProjectById(id: number) {
    return this.axiosClient.request('get', `/project/${id}`)
  }



  getProjectTasks(projectID: number) {
    return this.axiosClient.request('get', `/project/${projectID}`)
  }

  addProject(data: object) {
    return this.axiosClient.request('post', `/project`, data)
  }

  editProject(id: number, data: object) {
    return this.axiosClient.request('put', `/project/${id}`, data)
  }

  deleteProject(id: number) {
    return this.axiosClient.request('delete', `/project/${id}`)
  }

  

  

}


