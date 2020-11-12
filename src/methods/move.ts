import { Request } from "../tools/API"
import { ERRORS } from "../tools/Errors"
import { IErrorResponse, IResponseRemove } from "../tools/Types"

export const move = async (object_id: string, parent?: string | null, name?: string | null): Promise<IErrorResponse | IResponseRemove> => {

    if(!object_id) return ERRORS("OBJECTID_NOT_SET")

    return await Request({
        url: "/v3/move",
        method: "PATCH",
        body: {
            object_id,
            parent,
            name
        }
    })

}