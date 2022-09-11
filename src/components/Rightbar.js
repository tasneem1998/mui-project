import Box from '@mui/material/Box'
import React from 'react'

const Rightbar = () => {
    return (
        <Box
            p={2}
            bgcolor="red"
            flex={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            Rightbar
        </Box>
    )
}

export default Rightbar