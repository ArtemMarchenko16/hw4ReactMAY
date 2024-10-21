import {IUser} from "./IUser";

export interface IResponse {
    skip: number,
    total: number,
    limit: number,
    users: IUser[],
}