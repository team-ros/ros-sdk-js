class EndpointStore {
    private endpoint: string | null

    constructor() {
        this.endpoint = null
    }

    public setEndpoint(endpoint: string): void {
        if(!endpoint) throw "no endpoint set"
        if(!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(endpoint)) throw "endpoint is not a url"
        this.endpoint = endpoint
    }

    public getEndpoint(): string | boolean {
        if(!this.endpoint) return false
        return this.endpoint
    }
}

class TokenStore {
    private token: string | null

    constructor() {
        this.token = null
    }

    public setToken(token: string): void {
        if(!token) throw "no token set"
        if(!/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(token))throw "token does not comply with jwt spec"
        this.token = token
        if(!Boolean(process.env.DEV)) localStorage.setItem("token", token)
    }

    public getToken(): string | boolean {
        if(!Boolean(process.env.DEV)){
            if(!localStorage.getItem("token")) {
                return localStorage.getItem("token") || false
            }
        }
        if(!this.token) return false
        return this.token
    }

    public deleteToken(): void {
        if(!Boolean(process.env.DEV)) {
            if(localStorage.getItem("token")) {
                localStorage.removeItem("token")
            }
            if(this.token) {
                this.token = null
            }
        }
    }
}

export const tokenStore = new TokenStore()
export const endpointStore = new EndpointStore()