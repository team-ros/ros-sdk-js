import { setToken } from "./store/token"
import { setEndpoint } from "./store/endpoint"

// import user actions
import authenticate from "./user/authenticate"
import Delete from "./user/delete"

export class RosApi {
    
    setToken(token) {
        setToken(token)
    }

    setEndpoint(url) {
        setEndpoint(url)
    }


    user() {
        return {
            authenticate
        }
    }

    object() {

    }

}