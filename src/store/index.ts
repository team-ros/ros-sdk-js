class EndpointStore {
    private endpoint: string | null

    constructor() {
        this.endpoint = null
    }

    public setEndpoint(endpoint: string): void {
        if(!endpoint) throw "no endpoint set"
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
        //if(!/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(token))throw "token does not comply with jwt spec"
        this.token = token
    }

    public getToken(): string | boolean {
        console.log(this.token)
        if(!this.token) return false
        return this.token
    }
}

export const tokenStore = new TokenStore()
export const endpointStore = new EndpointStore()