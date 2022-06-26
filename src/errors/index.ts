import { ERROR_TYPES } from "../enums"

export const setError = (error: ERROR_TYPES) => {
    return {
        message: ERROR_TYPES[error],
        code: error
    }
}


