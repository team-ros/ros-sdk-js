export const getEndpoint = () => {
    try {
        return localStorage.getItem("api-endpoint")
    }
    catch( err ) {
        return false
    }
}