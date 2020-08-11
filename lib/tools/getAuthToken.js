"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthToken = void 0;
exports.getAuthToken = () => {
    try {
        return localStorage.getItem("auth-token");
    }
    catch (err) {
        return false;
    }
};
