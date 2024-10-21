import {IUser} from "./IUser";

export interface IResponseFnGetAllUsers {
    users: IUser[],
    flag: boolean
}