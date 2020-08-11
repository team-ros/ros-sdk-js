// import all functions
import { authenticate } from './user/authenticate'
import { editAccount } from './user/edit'
import { deleteAccount } from './user/delete'

interface IApi {
    endpoint: string;
}

export class API {
    constructor( options: IApi) {
        
    }

    public storeToken( token: string ) {
        try {
            localStorage.setItem("auth-token", token)
            return true
        }
        catch( err ) {
            return false
        }
    }

    private storeEndpoint( endpoint: string ) {
        try {
            localStorage.setItem("api-endpoint", endpoint)
            return true
        }
        catch( err ) {
            return false
        }
    }

    user() {
        return {
            authenticate,
            editAccount,
            deleteAccount
        }
    }

    object() {
        
    }

}