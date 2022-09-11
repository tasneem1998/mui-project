import Box from "@mui/material/Box";
import React from 'react';

const Sidebar = () => {
    return (
        <Box
            p={2}
            bgcolor="red"
            flex={1}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            Sidebar
        </Box>
    )
}

export default Sidebar