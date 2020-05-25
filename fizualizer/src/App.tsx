import React, { useEffect, useMemo } from "react"
import { DatabaseHelper } from "helpers/database/database-helper"
import { Menu } from "components/menu/Menu"
import { StoreType } from "redux/store"
import { useSelector } from "react-redux"
import { AskDatabaseUrl } from "components/database/AskDatabaseUrl"
import { View } from "./components/view/View"
import { Container } from "@material-ui/core"
// import styles from "./App.module.scss"

function App() {
    const databaseState = useSelector<StoreType, StoreType["database"]>(
        state => state.database,
    )

    const showPromtUrl = useMemo(() => {
        return !databaseState.connected && databaseState.loaded
    }, [databaseState.connected, databaseState.loaded])

    useEffect(() => {
        new DatabaseHelper().init()
    }, [])

    return (
        <div className="App">
            <Menu />
            <div style={{ height: 80 }} />
            <Container>
                <AskDatabaseUrl open={showPromtUrl} />
                {databaseState.connected && <View />}
            </Container>
        </div>
    )
}

export default App
