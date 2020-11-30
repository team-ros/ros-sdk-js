import { store as endpointStore } from "./store/endpoint"
import { firebase as FirebaseStore, IFirebaseOptions } from "./store/firebase"

import { createDir } from "./methods/create-dir"
import { search } from "./methods/search"
import { get } from "./methods/get"
import { upload } from "./methods/upload"
import { remove } from "./methods/remove"
import { move } from "./methods/move"
import { download } from "./tools/download"

export class rosapi {

    constructor(endpoint: string, firebaseOptions: IFirebaseOptions) {
        endpointStore.setEndpoint(endpoint)
        FirebaseStore.initializeApp(firebaseOptions)
        .then(() => console.log(`Auth Persistance: ${firebaseOptions.authPersistance || "LOCAL"}`))
        .catch((err) => console.log("Auth Persinstance: ERROR while setting", err))
    }

    public firebase() {
        return FirebaseStore.firebase
    }

    public object() {
        return {
            createDir,
            search,
            get,
            upload,
            remove,
            move,
            download
        }
    }

    public user() {
        return {
            
        }
    }

    public Oauth2() {
        return FirebaseStore.GoogleAuthProvider
    }
    
}