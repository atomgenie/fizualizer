import { setDatabaseUrl, setLoaded, reset } from "redux/database/database.actions"
import { store } from "redux/store"
import { ApiHelper } from "helpers/api/api-helper"

const localStorageKey = "__database_url__"

interface DatabaseConfig {
    hostname: string
    projectId: string
}

export class DatabaseHelper {
    private getSavedUrl(): DatabaseConfig | undefined {
        const hostname = localStorage.getItem(localStorageKey)

        if (!hostname) {
            return undefined
        }

        return JSON.parse(hostname)
    }

    private setSavedUrl(url: string, projectId: string) {
        const toSave: DatabaseConfig = {
            hostname: url,
            projectId,
        }
        localStorage.setItem(localStorageKey, JSON.stringify(toSave))
    }

    private clearUrl() {
        localStorage.removeItem(localStorageKey)
    }

    public async clear() {
        this.clearUrl()
        store.dispatch(reset())
    }

    public async init() {
        const savedUrl = this.getSavedUrl()
        if (!savedUrl) {
            store.dispatch(setLoaded())
            return
        }

        if (!(await new ApiHelper().setSettings(savedUrl.hostname, savedUrl.projectId))) {
            store.dispatch(setLoaded())
            return
        }

        store.dispatch(setDatabaseUrl(savedUrl.hostname, savedUrl.projectId))
    }

    public async setUrl(url: string, projectId: string): Promise<boolean> {
        const valid = await new ApiHelper().setSettings(url, projectId)
        if (!valid) {
            return false
        }
        this.setSavedUrl(url, projectId)

        store.dispatch(setDatabaseUrl(url, projectId))
        return true
    }
}
