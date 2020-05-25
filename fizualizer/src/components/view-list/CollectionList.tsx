import React, { useState, useEffect } from "react"
import { ApiHelper } from "helpers/api/api-helper"
import { List, ListItem, ListItemText } from "@material-ui/core"

interface props {
    setPath: (newPath: string[]) => void
    path: string[]
}

export const CollectionList: React.FC<props> = ({ path, setPath }) => {
    const [list, setList] = useState<string[]>([])

    useEffect(() => {
        new ApiHelper().getListCollection().then(data => setList(data))
    }, [])

    return (
        <List>
            {list.map(elm => (
                <ListItem key={elm} button>
                    <ListItemText onClick={() => setPath([elm])}>{elm}</ListItemText>
                </ListItem>
            ))}
        </List>
    )
}
