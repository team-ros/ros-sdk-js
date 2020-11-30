export const download = async (url: string, fileName: string) => {
    try {
        const response = await fetch(url, {
            method: "GET"
        })
        const downloadResponse = await response.blob()

        const downloadedFile = createFile(downloadResponse, fileName)
        return downloadedFile ? window.URL.createObjectURL(downloadedFile) : false
        
    }
    catch(err) {
        console.log("ERROR", err)
        return false
    }
}

const createFile = (payload: any, fileName: string) => {
    try {
        payload.lastModifiedDate = new Date()
        payload.name = fileName

        return <File>payload
    }
    catch(err) {
        console.log("ERROR", err)
        return false
    }
}