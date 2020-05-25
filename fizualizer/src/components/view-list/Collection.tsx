import React, { useState, useEffect } from "react"
import { ApiHelper } from "helpers/api/api-helper"
import { List, ListItem, ListItemText } from "@material-ui/core"

interface props {
    setPath: (newPath: string[]) => void
    path: string[]
}

export const Collection: React.FC<props> = ({ path, setPath }) => {
    const [list, setList] = useState<string[]>([])

    useEffect(() => {
        new ApiHelper()
            .getCollection(path)
            .then(data => setList(data.documents.map(elm => elm.name)))
    }, [path])

    return (
        <List>
            {list.map(elm => (
                <ListItem key={elm} button onClick={() => setPath([...path, elm])}>
                    <ListItemText>{elm}</ListItemText>
                </ListItem>
            ))}
        </List>
    )
}
