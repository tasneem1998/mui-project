import React from 'react';
import Box from "@mui/material/Box";
import PostCard from '../core/Post';

const Feed = () => {
    return (
        <Box flex={4} py={2}>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </Box>
    )
}

export default Feed