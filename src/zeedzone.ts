import axios, { AxiosInstance } from "axios";

export default class ZeedOne {
    private client: AxiosInstance;

    constructor(ApiKey: string) {
        this.client = axios.create({
            baseURL: 'http://zeedone.test',
            headers: { Authorization: `Bearer ${ApiKey}` },
        });
        
    }

    private async request(method: string, url: string, data?: any) {
        return (await this.client.request({ method, url, data })).data;
    }

    login(email: string, password: string) {
        return this.request("post", "/login", { email, password });
    }

    refresh() {
        return this.request("post", "/refresh");
    }

    logout() {
        return this.request("post", "/logout");
    }

    getCompany() {
      
        return this.request("get", "/company");
    }

    getLead() {
        return this.request("get", '/lead');
    }

    getLeadByID(id: number) {
        return this.request("get", `/lead/${id}`)
    }


    addLead(data: object) {
        return this.request("post", '/lead', data);
    }

    updateLead(id: number, data: object) {
        return this.request("put", `/lead/${id}`, data);
    }

    deleteLead(id: number) {
        return this.request("delete", `/lead/${id}`);
    }

    getLeadSource() {
        return this.request("get", `/lead-source`);
    }

    getLeadCustomFields() {
        return this.request("get", `/lead-customfields`);
    }


    //    client  API

    getclient() {
        return this.request("get", '/client');
    }

    getClientByID(id: number) {
        return this.request("get", `/client/${id}`)
    }


    addClient(data: object) {
        return this.request("post", '/client', data);
    }

    updateClient(id: number, data: object) {
        return this.request("put", `/client/${id}`, data);
    }

    deleteClient(id: number) {
        return this.request("delete", `/client/${id}`);
    }


    getLeadDetails(){
         return this.request("get", `/lead-details`)
    }

      getLeadDetailsById(id:number){
         return this.request("get", `/lead-details/${id}`)
    }



}