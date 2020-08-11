import axios from 'axios'
import { getEndpoint } from '../../tools/getEndpoint'
import { getAuthToken } from '../../tools/getAuthToken'

interface IUpdate {
    email?: string;
    phoneNumber?: string;
    password?: string;
    displayName?: string;
    photoURL?: string;
}

export const editAccount = async (options: IUpdate) => {
    const authToken = getAuthToken()
    if( authToken === false ) return {
        status: false,
        message: "authentication token is not set"
    }

    const endpointURL = getEndpoint()
    if( endpointURL === false ) return {
        status: false,
        message: "endpoint url is not defined"
    }

    try {
    let data = await axios.post(`${endpointURL}/user/edit`, {
        body: options,
        headers: {
            authorization: authToken        
        }
    })
    return data.data
    }
    catch(err) {
        return err
    }
}