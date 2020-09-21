import { endpointStore, tokenStore } from "./store"

// import user functions
import { authenticate } from "./user/authenticate"
import { deleteNow } from "./user/delete"

export class rosapi {
    constructor(endboint: string) {
        endpointStore.setEndpoint(endboint)
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
       
    }
}