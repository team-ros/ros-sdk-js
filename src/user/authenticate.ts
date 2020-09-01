import { getToken } from "../store/token"
import { getEndpoint } from "../store/endpoint"

export const authenticate = (method: "login" | "register") => {
    return new Promise( data => {
        const endpoint = getEndpoint()
        const token = getToken()
        if(!endpoint && !token) {
            throw "could not authenticate user"
        }
        fetch(`${endpoint}/user/authenticate`, {
            method: "POST",
            headers: {
                authorization: String(token),
                existing_user: method === "login" ? String(true) : String(false)
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