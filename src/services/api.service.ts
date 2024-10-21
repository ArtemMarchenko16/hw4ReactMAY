import axios from "axios";
import {IResponse} from "../models/IResponse";
import {IResponseFnGetAllUsers} from "../models/IResponseFnGetAllUsers";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type": "application/json"}
});


export const apiService = {
    users: {
        getAll: async (page: number):Promise<IResponseFnGetAllUsers> => {
            const skip = (page - 1 ) * 30;

            const axiosResponse = await axiosInstance.get<IResponse>("/users", {
                params: {
                    skip: skip
                }
            } );
            const newObj = {
                users: axiosResponse.data.users,
                flag: false
            }
            if (axiosResponse.data.total === axiosResponse.data.users[axiosResponse.data.users.length - 1].id) {
                newObj.flag = true
            } else {
                newObj.flag = false
            }
            return newObj
        }
    }
}


