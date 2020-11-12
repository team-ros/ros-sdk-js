import axios from "axios"
import { store as endpointStore } from "../store/endpoint"
import { firebase as FirebaseStore } from "../store/firebase"
import "firebase/auth"

import { ERRORS } from "./Errors"
import { time } from "console"

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
        const token = await getToken(5)

        if(options.anonymous && !token) return ERRORS("USER_NOT_AUTHENTICATED")

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
            ...ERRORS("REQUEST_ERROR"),
            debug: err
        }
    }
}

const timeout = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const getToken = async (tries: number) => {
    try {
        let counter = 0
        while(counter <= tries) {
            const token = await FirebaseStore.firebase.auth().currentUser?.getIdToken()
            if(token) return token
            await timeout(500)
        }
        return
    }
    catch(err) {
        console.log()
        return
    }
}
