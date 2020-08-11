import axios from 'axios'
import { getEndpoint } from '../../tools/getEndpoint'
import { getAuthToken } from '../../tools/getAuthToken'

export const deleteAccount = async () => {
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
    let data = await axios.post(`${endpointURL}/user/delete`, {
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