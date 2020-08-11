import axios from 'axios'
import { getEndpoint } from '../../tools/getEndpoint'
import { getAuthToken } from '../../tools/getAuthToken'

interface IOptions {
    folderName: string;
    folderpath: string;
}

export const authenticate = async (options: IOptions) => {
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
        let data = await axios.post(`${endpointURL}/object/create_dir${options.folderpath}`, {
            body: {
                folderName: options.folderName
            },
            headers: {
                authorization: authToken ,
                    
            }
        })
        return data.data
    }
    catch(err) {
        return err
    }
}