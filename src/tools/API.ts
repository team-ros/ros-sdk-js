import axios from "axios"

import { store as endpointStore } from "../store/endpoint"
import { store as tokenStore } from "../store/token"
import { ERRORS } from "./Errors"

interface IRequestOptions {
    url: string
    anonymous?: boolean
    method: 'POST' | 'GET' | 'PATCH' | 'DELETE' | 'PUT'
    headers?: {
        "Content-Type"?: string
        "Authorization"?: string
    }
    body?: any
    params?: any
}

export const Request = async (options: IRequestOptions) => {
    try {

        const endpoint = await endpointStore.getEndpoint()
        const token = await tokenStore.getToken()

        if(options.anonymous && !token) return ERRORS.USER_NOT_AUTHENTICATED

        const response = await axios({
            method: options.method,
            url: `${endpoint}${options.url}`,
            headers: {
                ...options.headers,
                "Authorization": options.anonymous ? undefined : `Bearer ${token}`
            },
            params: options.params,
            data: options.body
        })

        return response.data
    }
    catch(err) {
        return {
            ...ERRORS.USER_NOT_AUTHENTICATED,
            debug: err
        }
    }
}

