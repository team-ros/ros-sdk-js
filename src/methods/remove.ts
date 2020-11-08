import { Request } from "../tools/API"
import { ERRORS } from "../tools/Errors"
import { IErrorResponse, IResponseRemove } from "../tools/Types"

export const remove = async (object_id: string): Promise<IErrorResponse | IResponseRemove> => {

    if(!object_id) return ERRORS("OBJECTID_NOT_SET")

    return await Request({
        url: "/v3/remove",
        method: "DELETE",
        body: {
            object_id
        },
        headers: {
            "Content-Type": "application/json"
        }
    })

}