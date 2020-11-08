import { Request } from "../tools/API"
import { ERRORS } from "../tools/Errors"
import { IErrorResponse, IResponseUpload  } from "../tools/Types"
import formData from "form-data"

export const upload = async (file: File, name?: string | null, parent?: string | null): Promise<IErrorResponse | IResponseUpload> => {

    if(!file) return ERRORS("FILE_NOT_SET")

    const form = new formData()
    form.append("file", file)

    return await Request({
        url: "/v3/upload",
        method: "PUT",
        body: form,
        params: {
            name,
            parent
        },
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

}