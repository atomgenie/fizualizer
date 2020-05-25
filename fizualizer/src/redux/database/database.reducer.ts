import { State, Actions, ACTIONS } from "./database.types"
import { Reducer } from "redux"

const defaultState: State = {
    loaded: false,
    connected: false,
}

export const databaseReducer: Reducer<State, Actions> = (
    state = defaultState,
    action,
) => {
    switch (action.type) {
        case ACTIONS.SET_DATABASE_URL: {
            return {
                ...state,
                loaded: true,
                databaseUrl: action.payload.url,
                projectId: action.payload.projectId,
                connected: true,
            }
        }
        case ACTIONS.SET_LOADED: {
            return {
                ...state,
                loaded: true,
            }
        }

        case ACTIONS.RESET: {
            return {
                ...defaultState,
                loaded: true,
            }
        }
        default: {
            return state
        }
    }
}
