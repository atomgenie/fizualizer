import React, { useState, useEffect, useCallback } from "react"
import { ApiHelper } from "helpers/api/api-helper"
import { List, ListItem, ListItemText, Button } from "@material-ui/core"

interface props {
    setPath: (newPath: string[]) => void
    path: string[]
}

export const Collection: React.FC<props> = ({ path, setPath }) => {
    const [list, setList] = useState<string[]>([])

    const loadData = useCallback(async () => {
        const data = await new ApiHelper().getCollection(path)
        setList(data.documents.map(elm => elm.name))
    }, [path])

    useEffect(() => {
        loadData()
    }, [loadData])

    return (
        <div>
            <Button onClick={loadData}>Refresh</Button>
            <List>
                {list.map(elm => (
                    <ListItem key={elm} button onClick={() => setPath([...path, elm])}>
                        <ListItemText>{elm}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}
