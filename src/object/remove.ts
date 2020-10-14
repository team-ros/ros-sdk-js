import { endpointStore, tokenStore } from "../store"
import axios from "axios"

export const remove = async (object_id: string) => {
    
    const token = tokenStore.getToken()
    const endpoint = endpointStore.getEndpoint()


    if(!token) throw "token is invalid"
    if(!endpoint) throw "endpoint is not set"


    const headers = {
        authorization: `Bearer ${token}`,
    }

    try {
        const response = await axios({
            method: "DELETE",
            url: `${endpoint}/v2/delete`,
            data: {
                object_id
            },
            headers
        })
        return response.data
    }
    catch(err) {
        if(err.response.data) return err.response.data
        return {
            status: false,
            message: "request error",
            error: err
        }
    }


}