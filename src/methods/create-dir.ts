import { Request } from "../tools/API"
import { ERRORS } from "../tools/Errors"
import { IErrorResponse, IResponseCreateDir } from "../tools/Types"

export const createDir = async (name: string, parent?: string | null): Promise<IErrorResponse | IResponseCreateDir> => {
    
    if(!name) return ERRORS("NAME_NOT_SET")

    return await Request({
        url: "/v3/create-dir",
        method: "POST",
        body: {
            name,
            parent
        },
        headers: {
            "Content-Type": "application/json"
        }
    })

}