const ERROR_MESSAGES = {

    USER_NOT_AUTHENTICATED: {
        message: "user is not authenticated"
    },
    REQUEST_ERROR: {
        message: "the request was unsuccessful"
    },

    NAME_NOT_SET: {
        message: "parameter name not set"
    },

    PARENT_NOT_SET: {
        message: "parameter parent not set"
    },

    OBJECTID_NOT_SET: {
        message: "parameter object_id not set"
    },

    QUERY_NOT_SET: {
        message: "parameter query not set"
    },

    FILE_NOT_SET: {
        message: "parameter file not set"
    },

    TOKEN_MALFORMED: {
        message: "token malformed"
    }
}

interface IOptions {
    status?: boolean
}

export const ERRORS = (name: keyof typeof ERROR_MESSAGES, options?: IOptions) => {
    return {
        status: options?.status || false,
        ...ERROR_MESSAGES[name]
    }
}