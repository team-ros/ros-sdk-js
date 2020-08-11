"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
// import all functions
const authenticate_1 = require("./user/authenticate");
const edit_1 = require("./user/edit");
const delete_1 = require("./user/delete");
class API {
    constructor(options) {
    }
    storeToken(token) {
        try {
            localStorage.setItem("auth-token", token);
            return true;
        }
        catch (err) {
            return false;
        }
    }
    storeEndpoint(endpoint) {
        try {
            localStorage.setItem("api-endpoint", endpoint);
            return true;
        }
        catch (err) {
            return false;
        }
    }
    user() {
        return {
            authenticate: authenticate_1.authenticate,
            editAccount: edit_1.editAccount,
            deleteAccount: delete_1.deleteAccount
        };
    }
    object() {
    }
}
exports.API = API;
