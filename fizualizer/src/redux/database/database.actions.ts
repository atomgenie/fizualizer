import { ACTIONS, Actions } from "./database.types"

export const setDatabaseUrl = (url: string, projectId: string): Actions => ({
    type: ACTIONS.SET_DATABASE_URL,
    payload: {
        url,
        projectId,
    },
})

export const setLoaded = (): Actions => ({
    type: ACTIONS.SET_LOADED,
})
