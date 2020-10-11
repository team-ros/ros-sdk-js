import { endpointStore, tokenStore } from "./store"

// import user functions
import { login } from "./user/login"
import { deleteNow } from "./user/delete"

// import object function
import { createDir } from "./object/create_dir"
import { remove } from "./object/remove"
import { get } from "./object/get"
import { move } from "./object/move"
import { upload } from "./object/upload"

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
            login,
            deleteNow
        }
    }

    object() {
       return {
           createDir,
           remove,
           get,
           move,
           upload
       }
    }
}