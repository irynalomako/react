import {ICompanyAddress} from "./i.ts";

export interface ICompany {
    department: string;
    name: string;
    title: string;
    address: ICompanyAddress;
}