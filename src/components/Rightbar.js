import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import LatestConversations from '../core/LatestConversations'
import LatestPhotos from '../core/LatestPhotos'
import OnlineFriends from '../core/OnlineFriends'

const Rightbar = () => {
    return (
        <Box
            py={2}
            flex={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box position="fixed" sx={{ width: 2 / 7 }}>
                <Typography variant="h6" fontWeight="100">Online Friends</Typography>
                <OnlineFriends />
                <Typography variant="h6" fontWeight="100">Lates Photos</Typography>
                <LatestPhotos />
                <Typography variant="h6" fontWeight="100">Lates Conversations</Typography>
                <LatestConversations />
            </Box>
        </Box>
    )
}

export default Rightbar