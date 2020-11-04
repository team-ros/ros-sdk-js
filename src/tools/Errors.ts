export interface IErrorMessage {
    status: boolean
    message: string
}

export const ERRORS = {

    USER_NOT_AUTHENTICATED: {
        status: false,
        message: "user is not authenticated"
    },
    REQUEST_ERROR: {
        status: false,
        message: "the request was unsuccessful"
    },

    NAME_NOT_SET: {
        status: false,
        message: "parameter name not set"
    },

    PARENT_NOT_SET: {
        status: false,
        message: "parameter parent not set"
    },

    OBJECTID_NOT_SET: {
        status: false,
        message: "parameter object_id not set"
    },

    QUERY_NOT_SET: {
        status: false,
        message: "parameter query not set"
    },

    FILE_NOT_SET: {
        status: false,
        message: "parameter file not set"
    }
}