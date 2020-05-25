export interface State {
    databaseUrl?: string
    projectId?: string
    loaded: boolean
    connected: boolean
}

export enum ACTIONS {
    SET_DATABASE_URL = "database/SET_DATABASE_URL",
    SET_LOADED = "database/SET_LOADED",
    RESET = "database/RESET",
}

interface SetDatabaseUrl {
    type: ACTIONS.SET_DATABASE_URL
    payload: {
        url: string
        projectId: string
    }
}

interface SetLoaded {
    type: ACTIONS.SET_LOADED
}

interface Reset {
    type: ACTIONS.RESET
}

export type Actions = SetDatabaseUrl | SetLoaded | Reset
