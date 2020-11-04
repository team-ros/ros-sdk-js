class endpointStore {

    private apiEndpoint: string | undefined

    constructor() {
        this.apiEndpoint = undefined
    }

    public setEndpoint(endpoint: string) {
        if(!endpoint) throw "no endpoint was set"
        this.apiEndpoint = endpoint
    }

    public getEndpoint() {
        if(!this.apiEndpoint) throw "no endpoint was set"
        return this.apiEndpoint
    }

}

export const store = new endpointStore()