import { store as endpointStore } from "./store/endpoint"
import { store as firebaseStore } from "./store/token"

import { createDir } from "./methods/create-dir"
import { search } from "./methods/search"
import { get } from "./methods/get"
import { upload } from "./methods/upload"
import { remove } from "./methods/remove"
import { move } from "./methods/move"

export class rosapi {

    constructor(endpoint: string) {
        endpointStore.setEndpoint(endpoint)
    }

    auth() {
        return {
            setFirebase: firebaseStore.setFirebase
        }
    }

    object() {
        return {
            createDir,
            search,
            get,
            upload,
            remove,
            move
        }
    }

    user() {
        return {
            
        }
    }
}