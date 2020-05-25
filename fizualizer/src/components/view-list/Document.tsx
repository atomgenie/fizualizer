import React, { useState, useEffect, useCallback } from "react"
import { ApiHelper } from "helpers/api/api-helper"
import { ListItem, ListItemText, List, ListSubheader, Button } from "@material-ui/core"

interface props {
    setPath: (newPath: string[]) => void
    path: string[]
}

export const Document: React.FC<props> = ({ path, setPath }) => {
    const [subCollections, setSubCollection] = useState<string[]>([])
    const [datas, setDatas] = useState<{ key: string; value: any }[]>([])

    const loadData = useCallback(async () => {
        const data = await new ApiHelper().getDocument(path)
        setSubCollection(data.collections.map(elm => elm.name))
        setDatas(
            Object.keys(data.data).map(elm => {
                return {
                    key: elm,
                    value: data.data[elm].toString(),
                }
            }),
        )
    }, [path])

    useEffect(() => {
        loadData()
    }, [loadData])

    return (
        <div>
            <Button onClick={loadData}>Refresh</Button>
            <List
                subheader={<ListSubheader component="div">Subcollections</ListSubheader>}
            >
                {subCollections.map(sub => (
                    <ListItem key={sub} button onClick={() => setPath([...path, sub])}>
                        <ListItemText>{sub}</ListItemText>
                    </ListItem>
                ))}
            </List>

            <List subheader={<ListSubheader component="div">Data</ListSubheader>}>
                {datas.map(data => (
                    <ListItem key={data.key}>
                        <ListItemText>
                            {data.key}: {data.value}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}
