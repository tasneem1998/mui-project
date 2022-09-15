import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const sidebar_data = [
    { icon: <HomeIcon />, label: "Home" },
    { icon: <ArticleIcon />, label: "Pages" },
    { icon: <GroupIcon />, label: "Groups" },
    { icon: <StorefrontIcon />, label: "Marketplace" },
    { icon: <PersonIcon />, label: "Friends" },
    { icon: <SettingsIcon />, label: "Settings" },
    { icon: <AccountBoxIcon />, label: "Profile" },
    { icon: <DarkModeIcon />, label: <Switch/> },
]
const Sidebar = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Box
            p={2}
            flex={1}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <List component="nav">
                {sidebar_data.map((item, index) => (
                    <ListItem disablePadding>
                        <ListItemButton
                            selected={selectedIndex === index}
                            onClick={(event) => handleListItemClick(event, index)}
                            component="a"
                        >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default Sidebar