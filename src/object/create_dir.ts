import { endpointStore, tokenStore } from "../store"
import axios from "axios"

export const createDir = async (name: string, parent?: string | null) => {

    const token = tokenStore.getToken()
    const endpoint = endpointStore.getEndpoint()


    if(!token) throw "token is invalid"
    if(!endpoint) throw "endpoint is not set"


    const headers = {
        authorization: `Bearer ${token}`
    }

    try {
        const response = await axios({
            method: "POST",
            url: `${endpoint}/v2/create_dir`,
            data: {
                name,
                parent: parent ? parent : null
            },
            headers
        })

        return response.data
    }
    catch(err) {
        console.log(err)
        return false
    }


}