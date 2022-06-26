import { ERROR_TYPES } from "../enums";
export declare const setError: (error: ERROR_TYPES) => {
    message: any;
    code: ERROR_TYPES;
};
