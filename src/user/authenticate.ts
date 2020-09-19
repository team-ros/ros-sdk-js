import { endpointStore, tokenStore } from "../store"
import axios from "axios"

export  { tokenStore }

export const authenticate = (type: "login" | "register") => {
    return new Promise(data => {
        const token = tokenStore.getToken()
        const endpoint = endpointStore.getEndpoint()


        if(!token) throw "token is invalid"
        if(!endpoint) throw "endpoint is not set"


        const headers = {
            authorization: token,
            existing_user: type === "register" ? false : true
        }

        axios({
            method: "POST",
            url: `${endpoint}/user/authenticate`,
            headers,
        })
        .then(response => {
            console.log(response.data)
            data(response.data)
        })
        .catch(err => {
            console.log(err)
        })

    })
}