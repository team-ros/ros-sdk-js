import { getEndpoint } from "../store/endpoint"
import { getToken } from "../store/token"

export const authenticate = (method) => {
    return new Promise(data => {
        fetch(`${getEndpoint()}/user/authenticate`, {
            headers: {
                authorization: getToken(),
                existing_user: method === "login" ? true : false
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