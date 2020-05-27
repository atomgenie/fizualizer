import axios from "axios"
import { ElectronHelper } from "helpers/electron/electron-helper"

const serverUrl = "http://localhost:8938"

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
    private electronHelper: ElectronHelper

    constructor() {
        this.electronHelper = new ElectronHelper()
    }

    public async setSettings(hostname: string, projectId: string): Promise<boolean> {
        const payload = {
            url: hostname,
            projectId: projectId,
        }

        if (this.electronHelper.isElectron(window)) {
            const elmWindow = window

            return new Promise((res, rej) => {
                elmWindow.astilectron.sendMessage(
                    { name: "setFirestore", payload },
                    (message: any) => {
                        res(message.payload)
                    },
                )
            })
        } else {
            try {
                await axios.post(`${serverUrl}/firebase`, payload)
                return true
            } catch {
                return false
            }
        }
    }

    public async getCollection(path: string[]): Promise<CollectionEntity> {
        const body = path.map(elm => ({
            name: elm,
        }))

        if (this.electronHelper.isElectron(window)) {
            const elmWindow = window

            return new Promise((res, rej) => {
                elmWindow.astilectron.sendMessage(
                    {
                        name: "getCollection",
                        payload: {
                            path: body,
                        },
                    },
                    (message: any) => {
                        if (message.name === "error") {
                            rej()
                        } else {
                            res(message.payload)
                        }
                    },
                )
            })
        } else {
            const res = await axios.post(`${serverUrl}/collection`, {
                path: body,
            })

            return res.data
        }
    }

    public async getDocument(path: string[]): Promise<DocumentEntity> {
        const body = {
            path: path.map(elm => ({
                name: elm,
            })),
        }

        if (this.electronHelper.isElectron(window)) {
            const elmWindow = window

            return new Promise((res, rej) => {
                elmWindow.astilectron.sendMessage(
                    { name: "getDocument", payload: body },
                    (message: any) => {
                        if (message.name === "error") {
                            rej()
                        } else {
                            res(message.payload)
                        }
                    },
                )
            })
        } else {
            const res = await axios.post(`${serverUrl}/document`, body)
            return res.data
        }
    }

    public async getListCollection(): Promise<string[]> {
        if (this.electronHelper.isElectron(window)) {
            const elmWindow = window
            return new Promise((res, rej) => {
                elmWindow.astilectron.sendMessage(
                    { name: "listCollection" },
                    (message: any) => {
                        if (message.name === "error") {
                            rej()
                        } else {
                            res(message.payload)
                        }
                    },
                )
            })
        } else {
            const data = await axios.post(`${serverUrl}/list`)
            return data.data
        }
    }
}
