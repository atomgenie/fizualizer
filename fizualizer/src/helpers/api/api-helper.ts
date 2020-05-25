import axios from "axios"

const serverUrl = "http://localhost:5000"

interface DocumentEntity {
    id: string
    collections: Array<{
        name: string
    }>
    data: any
}

interface CollectionEntity {
    documents: Array<{
        name: string
    }>
}

export class ApiHelper {
    public async setSettings(hostname: string, projectId: string): Promise<boolean> {
        try {
            await axios.post(`${serverUrl}/firebase`, {
                url: hostname,
                projectId: projectId,
            })
            return true
        } catch {
            return false
        }
    }

    public async getCollection(path: string[]): Promise<CollectionEntity> {
        const body = path.map(elm => ({
            name: elm,
        }))

        const res = await axios.post(`${serverUrl}/collection`, {
            path: body,
        })

        return res.data
    }

    public async getDocument(path: string[]): Promise<DocumentEntity> {
        const body = {
            path: path.map(elm => ({
                name: elm,
            })),
        }

        const res = await axios.post(`${serverUrl}/document`, body)
        return res.data
    }

    public async getListCollection(): Promise<string[]> {
        const data = await axios.post(`${serverUrl}/list`)
        return data.data
    }
}
