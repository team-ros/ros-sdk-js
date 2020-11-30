import { firebase } from "../store/firebase"

export const persistSession = async (options: {
    loginUrl: string,
    registerUrl?: string,
    dashboardUrl: string,
    reloads?: number,
    timeout: number,
}) => {

    try {

        if(!options.reloads) options.reloads = 3
        if(!options.timeout) options.timeout = 300

        const response = await CheckIfUserIsSignedIn(options.reloads, options.timeout)
        console.log("PERSISTANT SESSION:", response)

        if(!response && window.location.pathname === options.dashboardUrl) window.location.assign(options.loginUrl)

        if(response && window.location.pathname === options.loginUrl || window.location.pathname === options.registerUrl) window.location.assign(options.dashboardUrl)
    }
    catch(err) {
        console.log("ERROR", err)
        window.location.assign(options.loginUrl)
    }
}

const timeout = async (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const CheckIfUserIsSignedIn = async (n: number, timeoutTime: number) => {
    try {
        for(let i = 0; i <= n; i++) {
            if(firebase.firebase.auth().currentUser) return true
            await timeout(timeoutTime)
        }
        return false
    }
    catch(err) {
        return false
    }
}
