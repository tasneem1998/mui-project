import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const LatestConversations = () => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {data.map((item, idx) => (
                <>
                    <ListItem alignItems="flex-start" key={idx}>
                        <ListItemAvatar>
                            <Avatar alt={item.secondary} src={`https://i.pravatar.cc/150?img=${idx}`} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.primary}
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {item.secondary}
                                    </Typography>
                                    {item.comments}
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </>
            ))}

        </List>
    );
}
export default LatestConversations;

const data = [
    { primary: "Brunch this weekend?", secondary: "Ali Connors", comments: " — I'll be in your neighborhood doing errands this…",},
    { primary: "Summer BBQ", secondary: "to Scott, Alex, Jennifer", comments: " — Wish I could come, but I'm out of town this…",},
    { primary: "Oui Oui", secondary: "Sandra Adams", comments: " — Do you have Paris recommendations? Have you ever…",}
]