let token = ""

export const setToken = (newToken: string) => {
    try {
        token = newToken
        return true
    }
    catch(err) {
        console.error(err)
        return false
    }
}

export const deleteToken = () => {
    try {
        if(token) {
            token = ""
        }
        if(localStorage.getItem("token")) {
            localStorage.removeItem("token")
        }
        return true
    }
    catch(err) {
        console.error(err)
        return false
    }
}

export const getToken = () => {
    try {
        if(localStorage.getItem("token")) {
            return localStorage.getItem("token")
        }
        else if(token) {
            return token
        }
        else {
            console.error("No Token set")
            return false
        }
    }
    catch(err) {
        console.error(err)
        return false
    }
}

export const saveToken = () => {
    try {
        if(token) {
            localStorage.setItem("token", token)
            return true
        }
        return false
    }
    catch(err) {
        console.error(err)
        return false
    }
}