import { getEndpoint } from "../store/endpoint"
import { getToken } from "../store/token"

export const Delete = () => {
    return new Promise(data => {
        fetch(`${getEndpoint()}/user/delete`, {
            headers: {
                authorization: getToken(),
            }
        })
        .then(res => res.json())
        .then(res => {
            data(res)
        })
        .catch(err => {
            throw err
        })
    })
}