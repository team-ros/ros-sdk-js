import { Request } from "../tools/API"
import { ERRORS } from "../tools/Errors"
import { IErrorResponse, IResponseCreateDir } from "../tools/Types"

export const copy = async (object_id: string, name?: string | null, parent?: string | null): Promise<IErrorResponse | IResponseCreateDir> => {
    
    if(!object_id) return ERRORS("OBJECTID_NOT_SET")

    return await Request({
        url: "/v3/copy",
        method: "POST",
        body: {
            object_id,
            name,
            parent
        },
        headers: {
            "Content-Type": "application/json"
        }
    })

}