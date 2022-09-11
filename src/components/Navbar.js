import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Pic from "../profile.jpg"
import React from 'react';
import Searchbar from "../core/Searchbar"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import AccountSetting from '../core/AccountSetting';

const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-between",
}));

const StyledLogo = styled(Typography)(() => ({
    display: "flex",
    alignItems: "center",
    gap: "8px"
}));

const Search = styled(Box)(({ theme }) => ({
    width: "40%",
    [theme.breakpoints.down('sm')]: {
        width: "50%",
    },
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    justifyContent: 'space-between',
    alignItems: "center",
    gap: "16px",
    [theme.breakpoints.up('sm')]: {
        display: "flex",
    },
    cursor: "pointer"
}));

const User = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
    gap: "8px",
    [theme.breakpoints.up('sm')]: {
        display: "none",
    },
}));

const Navbar = () => {
    const [openSetting, setOpenSetting] = React.useState(null);
    const handleOpenSetting = (e) => {
        setOpenSetting(e.currentTarget)
    }
    const handleCloseSetting = () => {
        setOpenSetting(null)
    }
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <StyledLogo variant='h6'>
                    <DeviceHubIcon /> Navbar
                </StyledLogo>
                <Search>
                    <Searchbar />
                </Search>
                <Icons onClick={handleOpenSetting}>
                    <Badge badgeContent={4} color="error">
                        <MailIcon color="white" />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <NotificationsIcon color="white" />
                    </Badge>
                    <Avatar src={Pic} sx={{ width: 35, height: 35 }} />
                </Icons>
                <User onClick={handleOpenSetting}>
                    <Avatar src={Pic} sx={{ width: 35, height: 35 }} />
                </User>
                <AccountSetting open={openSetting} handleClose={handleCloseSetting} />
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar