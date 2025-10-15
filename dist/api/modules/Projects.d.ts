import AxiosClient from "../../axios/axiosInstance";
export default class Projects {
    private axiosClient;
    constructor(ApiKey: AxiosClient);
    getAllProjects(): Promise<any>;
    getMyProjects(id: number): Promise<any>;
    getProjectsByWithQuery(): Promise<any>;
    getProjectById(id: number): Promise<any>;
    getProjectTasks(projectID: number): Promise<any>;
    addProject(data: object): Promise<any>;
    editProject(id: number, data: object): Promise<any>;
    deleteProject(id: number): Promise<any>;
}
//# sourceMappingURL=Projects.d.ts.map