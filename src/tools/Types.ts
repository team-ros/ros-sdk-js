export interface IErrorResponse {
    status: boolean
    errors: {
        msg: string
        param: string
        location: string
    }[]
}

export interface IResponseCreateDir {
    status: boolean
    message?: string
}

export interface IResponseSearch {
    status: boolean
    message?: string
    search?: {
        id: string
        name: string
        score: number
        type: string
    }[]
}

export interface IResponseCopy {
    status: boolean,
    message?: string
}

export interface IResponseGetDir {
    status: boolean
    listing?: {
        id: string
        name: string
        parent: string | null
        type: 'file' | 'directory'
        size: number
        date: number
        error_message?: string,
        error: any
    }[]
    message?: string
}

export interface IResponseGetFile {
    status: boolean
    url?: string
    message?: string
}

export interface IResponseUpload {
    status: boolean
    message?: string
}

export interface IResponseRemove {
    status: boolean
    message?: string
}

export interface IResponseMove {
    status: boolean
    message?: string
}