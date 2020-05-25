import React, { useState } from "react"
import { DatabaseHelper } from "helpers/database/database-helper"
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    DialogContentText,
    CircularProgress,
} from "@material-ui/core"

interface props {
    open: boolean
}

export const AskDatabaseUrl: React.FC<props> = ({ open }) => {
    const [loading, setLoading] = useState(false)
    const [projectId, setProjectId] = useState("")
    const [newUrl, setNewUrl] = useState("")
    const [valid, setValid] = useState(true)

    const handleSubmit = async () => {
        setLoading(true)
        const isValid = await new DatabaseHelper().setUrl(newUrl, projectId)
        setValid(isValid)
        setLoading(false)
    }

    return (
        <Dialog open={open}>
            <DialogTitle>Database URL</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please provider the database URL to use this tool
                </DialogContentText>
                {valid && <DialogContentText>Invalid URL</DialogContentText>}
                <TextField
                    autoFocus
                    margin="dense"
                    label="URL"
                    type="text"
                    fullWidth
                    value={newUrl}
                    onChange={e => setNewUrl(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    label="ProjectId"
                    type="text"
                    fullWidth
                    value={projectId}
                    onChange={e => setProjectId(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                {loading ? (
                    <CircularProgress size="1rem" />
                ) : (
                    <Button color="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    )
}
