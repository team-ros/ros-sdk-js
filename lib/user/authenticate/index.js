"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const axios_1 = __importDefault(require("axios"));
const getEndpoint_1 = require("../../tools/getEndpoint");
const getAuthToken_1 = require("../../tools/getAuthToken");
exports.authenticate = (method) => __awaiter(void 0, void 0, void 0, function* () {
    const authToken = getAuthToken_1.getAuthToken();
    if (authToken === false)
        return {
            status: false,
            message: "authentication token is not set"
        };
    const endpointURL = getEndpoint_1.getEndpoint();
    if (endpointURL === false)
        return {
            status: false,
            message: "endpoint url is not defined"
        };
    try {
        let data = yield axios_1.default.post(`${endpointURL}/user/authenticate`, {
            headers: {
                authorization: authToken,
                existing_user: method === "login" ? true : false
            }
        });
        return data.data;
    }
    catch (err) {
        return err;
    }
});
