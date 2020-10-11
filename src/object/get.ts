import { endpointStore, tokenStore } from "../store"
import axios from "axios"

export const getObj = (objectID: string) => {
    return new Promise(data => {
        const token = tokenStore.getToken()
        const endpoint = endpointStore.getEndpoint()


        if(!token) throw "token is invalid"
        if(!endpoint) throw "endpoint is not set"


        const headers = {
            authorization: token,
        }

        axios({
            method: "GET",
            url: `${endpoint}/v2/get`,
            params: {
                object_id: objectID
            },
            headers
        })
        .then(response => {
            data(response.data)
        })
        .catch(err => {
            throw err
        })

    })
}