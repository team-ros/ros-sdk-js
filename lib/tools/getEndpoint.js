"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpoint = void 0;
exports.getEndpoint = () => {
    try {
        return localStorage.getItem("api-endpoint");
    }
    catch (err) {
        return false;
    }
};
