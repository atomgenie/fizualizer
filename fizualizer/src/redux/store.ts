import { databaseReducer } from "./database/database.reducer"
import { createStore, combineReducers } from "redux"

const reducers = combineReducers({
    database: databaseReducer,
})

export type StoreType = ReturnType<typeof reducers>

export const store = createStore(
    reducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
)
