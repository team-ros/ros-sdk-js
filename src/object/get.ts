import { endpointStore, tokenStore } from "../store"
import axios from "axios"

export const get = async (object_id?: string | null): Promise<{
    status: boolean;
    listing: {
        id: string;
        name: string;
        parent: string | null;
        type: 'file' | 'directory';
        size: number | boolean;
        data: number;
    }[];
} | {
    status: boolean;
    message: string;
    error: any
}> => {
    
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
            url: `${endpoint}/v2/get`,
            params: {
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