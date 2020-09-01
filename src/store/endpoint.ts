let endpoint = ""

export const setEndpoint= (newEndpoint: string) => {
    try {
        endpoint = newEndpoint
        return true
    }
    catch(err) {
        console.error(err)
        return false
    }
}

export const getEndpoint = () => {
    try {
        if(localStorage.getItem("endpoint")) {
            return localStorage.getItem("endpoint")
        }
        else if(endpoint) {
            return endpoint
        }
        else {
            console.error("No Endpoint set")
            return false
        }
    }
    catch(err) {
        console.error(err)
        return false
    }
}

export const saveEndpoint = () => {
    try {
        if(endpoint) {
            localStorage.setItem("endpoint", endpoint)
            return true
        }
        return false
    }
    catch(err) {
        console.error(err)
        return false
    }
}