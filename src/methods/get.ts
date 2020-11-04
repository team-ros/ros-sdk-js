import { Request } from "../tools/API"
import { ERRORS } from "../tools/Errors"
import { IErrorResponse, IResponseGetFile, IResponseGetDir } from "../tools/Types"

export const get = async (object_id?: string | null): Promise<IErrorResponse | IResponseGetDir | IResponseGetFile> => {

    return await Request({
        url: "/v3/get",
        method: "GET",
        params: {
            object_id
        }
    })

}