import React, { useState, useMemo } from "react"
import { Paper } from "@material-ui/core"
import { ENTITY_TYPE } from "types/types"
import styles from "./View.module.scss"
import { CollectionList } from "components/view-list/CollectionList"
import { Collection } from "components/view-list/Collection"
import { Document } from "components/view-list/Document"

const generateIndex = (path: string[], pos: number) => {
    return path.reduce((prev, curr, i) => {
        if (i > pos) {
            return prev
        }
        return `${prev}/${curr}`
    }, "")
}

export const View: React.FC = () => {
    const [path, setPath] = useState<string[]>([])

    const viewType = useMemo(() => {
        return path.length % 2 === 0 ? ENTITY_TYPE.DOCUMENT : ENTITY_TYPE.COLLECTION
    }, [path])

    return (
        <Paper elevation={1}>
            <div className={styles.path}>
                <div onClick={() => setPath([])} className={styles.pathElm}>
                    / Home
                </div>
                {path.map((elm, i) => (
                    <div
                        key={generateIndex(path, i)}
                        className={styles.pathElm}
                        onClick={() => setPath(path.filter((_elm, pos) => pos <= i))}
                    >
                        / {elm}
                    </div>
                ))}
            </div>
            {path.length === 0 && <CollectionList path={path} setPath={setPath} />}
            {viewType === ENTITY_TYPE.COLLECTION && (
                <Collection path={path} setPath={setPath} />
            )}
            {viewType === ENTITY_TYPE.DOCUMENT && path.length !== 0 && (
                <Document path={path} setPath={setPath} />
            )}
        </Paper>
    )
}
