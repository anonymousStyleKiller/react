import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "23520520-94a9-4001-869b-8a8d6e40abb4"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const apiMe = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${pageNumber}&count=${pageSize}`)
        ).then(response => {
            return response.data;
        })
    },

    follow(id){
        return(
            instance.post(`follow/${id}`).then(response=>{
                return response.data;
            })
        )
    },
    unFollow(id){
        return(
            instance.delete(`follow/${id}`).then(response=>{
                return response.data;
            })
        )
    },
    auth(authResponse){
        return(
            instance.get(+authResponse).then(responce=>{
                return responce.data
            })
        )
    },
    profile(userId){
        return(
            instance.get(`profile/${userId}`).then(response=>{
                return response.data;
            })
        )
    }
};


