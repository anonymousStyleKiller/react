import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "23520520-94a9-4001-869b-8a8d6e40abb4"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const API = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        ).then(response => {
            return response.data;
        })
    },

    follow(){

    }
};


