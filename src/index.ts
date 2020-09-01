import { setEndpoint, getEndpoint, saveEndpoint  } from "./store/endpoint"
import { setToken, getToken, saveToken, deleteToken } from "./store/token"
import { authenticate } from "./user/authenticate"


export class rosApi {
    constructor(endpoint: string) {
        try {
            if(setEndpoint(endpoint)) {
                saveEndpoint()
            }
        }
        catch(err) {
            console.error(err)
            console.error("Endpoint could not be stored")
        }
    }

    token() {
        return {
            setToken,
            saveToken,
            deleteToken
        }
    }

    user() {
        return {
            authenticate
        }
    }
}