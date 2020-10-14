import { endpointStore, tokenStore } from "../store"
import axios from "axios"
import FormData from "form-data"

export const upload = async (file: File, parent?: string | null) => {
    
    const token = tokenStore.getToken()
    const endpoint = endpointStore.getEndpoint()

    if(!token) throw "token is invalid"
    if(!endpoint) throw "endpoint is not set"
    if(!file) throw "no file is set"


    const data = new FormData()
    data.append("file", file)

    const headers = {
        authorization: `Bearer ${token}`,
        ...data.getHeaders()
    }

    try {
        const response = await axios({
            method: "PUT",
            url: `${endpoint}/v2/upload`,
            headers,
            params: {
                parent
            },
            data
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