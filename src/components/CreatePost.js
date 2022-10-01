import * as React from 'react';
import Box from "@mui/material/Box"
// import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import Fab from "@mui/material/Fab"
import Add from "@mui/icons-material/Add"
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageIcon from '@mui/icons-material/Image';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EventIcon from '@mui/icons-material/Event';
import { styled } from '@mui/material';
import userPic from "../profile.jpg"

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    padding: "16px 32px 24px"
};

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "16px"
})
const CreatePost = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{
            position: "fixed",
            left: { xs: '50%', md: "33px" },
            bottom: { xs: "33px", md: "none" },
            transform: { xs: 'translate(-50%, -50%)', md: "none" }
        }}>
            <Tooltip title="Add Post" placement='right' arrow>
                <Fab color="primary" onClick={handleOpen}>
                    <Add />
                </Fab>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={modalStyle}>
                    <Typography variant="h6" color="gray" textAlign="center" mb={2}>
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar alt="Remy Sharp" src={userPic} />
                        <Typography variant="span" fontWeight="500"> Code Lover</Typography>
                    </UserBox>
                    <Box mb={2}>
                        <TextField
                            variant='standard'
                            fullWidth
                            placeholder="What's on your mind"
                            multiline
                            rows={3}
                        />
                    </Box>
                    <Stack direction="row" gap={1} mb={2}>
                        <EmojiEmotionsIcon color="warning"/>
                        <VideoCameraBackIcon color="secondary"/>
                        <ImageIcon color="success"/>
                        <PersonAddIcon color="error"/>
                    </Stack>
                    <ButtonGroup fullWidth variant='contained'>
                        <Button>Post</Button>
                        <Button sx={{width: "50px"}}><EventIcon/></Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </Box>
    )
}

export default CreatePost