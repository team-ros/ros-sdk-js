import { Request } from "../tools/API"
import { ERRORS } from "../tools/Errors"
import { IErrorResponse, IResponseGetDir, IResponseSearch } from "../tools/Types"

export const search = async (query: string): Promise<IErrorResponse | IResponseGetDir> => {
    
    if(!query) return ERRORS("QUERY_NOT_SET")

    return await Request({
        url: "/v3/search",
        method: "GET",
        params: {
            search: query
        }
    })

}