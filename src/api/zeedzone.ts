import AxiosClient from "../axios/axiosInstance";
import AuthAPI from "./modules/Auth";
import AttendenceAPI from "./modules/Attendence";
import ChatAPI from "./modules/Chat";
import ClientAPI from "./modules/Client";
import CompanyAPI from "./modules/Company";
import ContractAPI from "./modules/Contract";
import CostCodeAPI from "./modules/CostCode";
import DepartmentAPI from "./modules/Department";
import DesignationAPI from "./modules/Designation";
import EmployeesAPI from "./modules/Employees";
import AttendanceAPI from "./modules/Attendence";
import EquipmentsAPI from "./modules/Equipments";
import Estimates from "./modules/Estimates";
import Event from "./modules/Event";
import HolidayAPI from "./modules/Holiday";
import LeadAPI from "./modules/Lead";
import MaterialsAPI from "./modules/Materials";
import NoticeAPI from "./modules/Notice";
import OrdersAPI from "./modules/Orders";
import PartiesAPI from "./modules/Parties";
import PaymentAPI from "./modules/Payment";
import ProductsAPI from "./modules/Products";
import ProjectsAPI from "./modules/Projects";
import SubCostCodeAPI from "./modules/SubCostCode";
import TaskAPI from "./modules/Task";
import TicketsAPI from "./modules/Tickets";
import WorkForcesAPI from "./modules/WorkForces";

export default class ZeedOneAPI {


  // Expose all module instances as public properties
  public auth: AuthAPI;
  public attendance: AttendenceAPI;
  public chat: ChatAPI;
  public client: ClientAPI;
  public company: CompanyAPI;
  public contract: ContractAPI;
  public costCode: CostCodeAPI;
  public department: DepartmentAPI;
  public designation: DesignationAPI;
  public employees: EmployeesAPI;
  public equipments: EquipmentsAPI;
  public estimates: Estimates;
  public event: Event;
  public holiday: HolidayAPI;
  public lead: LeadAPI;
  public materials: MaterialsAPI;
  public notice: NoticeAPI;
  public orders: OrdersAPI;
  public parties: PartiesAPI;
  public payment: PaymentAPI;
  public products: ProductsAPI;
  public projects: ProjectsAPI;
  public subCostCode: SubCostCodeAPI;
  public task: TaskAPI;
  public tickets: TicketsAPI;
  public workforces: WorkForcesAPI;

  public axiosClient: AxiosClient;


  constructor(ApiKey: string) {
    // Initialize axios client
  this.axiosClient =new AxiosClient(ApiKey);

    // Initialize all module APIs with axios client
    this.auth = new AuthAPI(this.axiosClient);
    this.attendance = new AttendenceAPI(this.axiosClient);
    this.chat = new ChatAPI(this.axiosClient);
    this.client = new ClientAPI(this.axiosClient);
    this.company = new CompanyAPI(this.axiosClient);
    this.contract = new ContractAPI(this.axiosClient);
    this.costCode = new CostCodeAPI(this.axiosClient);
    this.department = new DepartmentAPI(this.axiosClient);
    this.designation = new DesignationAPI(this.axiosClient);
    this.employees = new EmployeesAPI(this.axiosClient);
    this.equipments = new EquipmentsAPI(this.axiosClient);
    this.estimates = new Estimates(this.axiosClient);
    this.event = new Event(this.axiosClient);
    this.holiday = new HolidayAPI(this.axiosClient);
    this.lead = new LeadAPI(this.axiosClient);
    this.materials = new MaterialsAPI(this.axiosClient);
    this.notice = new NoticeAPI(this.axiosClient);
    this.orders = new OrdersAPI(this.axiosClient);
    this.parties = new PartiesAPI(this.axiosClient);
    this.payment = new PaymentAPI(this.axiosClient);
    this.products = new ProductsAPI(this.axiosClient);
    this.projects = new ProjectsAPI(this.axiosClient);
    this.subCostCode = new SubCostCodeAPI(this.axiosClient);
    this.task = new TaskAPI(this.axiosClient);
    this.tickets = new TicketsAPI(this.axiosClient);
    this.workforces = new WorkForcesAPI(this.axiosClient);
  }
}
