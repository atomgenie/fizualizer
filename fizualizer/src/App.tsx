import React, { useEffect, useMemo, useState } from "react"
import { DatabaseHelper } from "helpers/database/database-helper"
import { Menu } from "components/menu/Menu"
import { StoreType } from "redux/store"
import { useSelector } from "react-redux"
import { AskDatabaseUrl } from "components/database/AskDatabaseUrl"
import { View } from "./components/view/View"
import { Container, Menu as UIMenu, Button, MenuItem } from "@material-ui/core"
import { ElectronHelper } from "helpers/electron/electron-helper"
// import styles from "./App.module.scss"

function App() {
    const [openMenu, setOpenMenu] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const [isLoadingReady, setIsLoadingReady] = useState(false)

    useEffect(() => {
        if (new ElectronHelper().isElectron(window)) {
            document.addEventListener(
                "astilectron-ready",
                () => {
                    setIsLoadingReady(true)
                },
                { once: true },
            )
        } else {
            setIsLoadingReady(true)
        }
    }, [])

    const databaseState = useSelector<StoreType, StoreType["database"]>(
        state => state.database,
    )

    const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
        setOpenMenu(true)
    }

    const showPromtUrl = useMemo(() => {
        return !databaseState.connected && databaseState.loaded
    }, [databaseState.connected, databaseState.loaded])

    useEffect(() => {
        if (isLoadingReady) {
            new DatabaseHelper().init()
        }
    }, [isLoadingReady])

    const resetConf = async () => {
        await new DatabaseHelper().clear()
    }

    return (
        <div className="App">
            <Menu />
            <div style={{ height: 80 }} />
            <div>
                <Button onClick={handleClickMenu}>Menu</Button>
                <UIMenu
                    keepMounted
                    open={openMenu}
                    onClose={() => setOpenMenu(false)}
                    anchorEl={anchorEl}
                >
                    <MenuItem onClick={resetConf}>Reset configuration</MenuItem>
                </UIMenu>
            </div>
            <Container>
                <AskDatabaseUrl open={showPromtUrl} />
                {databaseState.connected && isLoadingReady && <View />}
            </Container>
        </div>
    )
}

export default App
