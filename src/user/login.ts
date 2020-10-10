import { endpointStore, tokenStore } from "../store"
import axios from "axios"

export const login = async (email: string) => {
    
    if(!email) throw "email is not provided"
    if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email)) throw "email is not valid"

    const token = tokenStore.getToken()
    const endpoint = endpointStore.getEndpoint()


    if(!token) throw "token is invalid"
    if(!endpoint) throw "endpoint is not set"


    const headers = {
        authorization: `Bearer ${token}`,
    }

    try {
        const response = await axios({
            method: "GET",
            url: `${endpoint}/v2/login`,
            headers,
            params: { 
                email 
            }
        })
    
        return response.data
    }
    catch(err) {
        return false
    }
    
}