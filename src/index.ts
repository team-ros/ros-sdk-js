import { endpointStore, tokenStore } from "./store"

// import user functions
import { authenticate } from "./user/authenticate"
import { deleteNow } from "./user/delete"

// import object function
import { createDir } from "./object/create_dir"

export class rosapi {
    constructor(endpoint: string) {
        endpointStore.setEndpoint(endpoint)
    }

    token() {
        return {
            set(token: string) {
                tokenStore.setToken(token)
            },
            delete(): void {
                tokenStore.deleteToken()
            }
        }
    }

    user() {
        return {
            authenticate,
            deleteNow
        }
    }

    object() {
       return {
           createDir
       }
    }
}