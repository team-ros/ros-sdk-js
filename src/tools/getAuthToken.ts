export const getAuthToken = () => {
    try {
        return localStorage.getItem("auth-token")
    }
    catch( err ) {
        return false
    }
}