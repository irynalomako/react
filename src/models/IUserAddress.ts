import {ICoordinates} from "./i.ts";

export interface IUserAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: ICoordinates;
    country: string;
}