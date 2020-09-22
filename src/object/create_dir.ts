import { endpointStore, tokenStore } from "../store"
import axios from "axios"

export const createDir = (path: string, name: string) => {
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
            url: `${endpoint}/object/create-dir${path}`,
            data: {
                folderName: name
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