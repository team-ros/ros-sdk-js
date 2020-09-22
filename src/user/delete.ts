import { endpointStore, tokenStore } from "../store"
import axios from "axios"

export const deleteNow = () => {
    return new Promise(data => {
        const token = tokenStore.getToken()
        const endpoint = endpointStore.getEndpoint()

        if(!token) throw "token is invalid"
        if(!endpoint) throw "endpoint is not set"

        const headers = {
            authorization: token
        }

        axios({
            method: "POST",
            url: `${endpoint}/user/delete`,
            headers
        })
        .then(response => {
            data(response.data)
        })
        .catch(err => {
            data(err.response.data)
        })
    })
}