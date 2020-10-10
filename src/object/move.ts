import { endpointStore, tokenStore } from "../store"
import axios from "axios"

export const move = (parent: string, name: string, objectID: string) => {
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
            url: `${endpoint}/v2/move`,
            data: {
                parent,
                name: name,
                object_id: objectID
            },
            headers
        })
        .then(response => {
            console.log(response)
            data(response.data)
        })
        .catch(err => {
            data(err.response.data)
        })

    })
}