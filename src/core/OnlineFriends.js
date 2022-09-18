import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const OnlineFriends = () => {
    return (
        <AvatarGroup max={7} sx={{ justifyContent: "start" }}>
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?u=a" />
            <Avatar alt="Travis Howard" src="https://i.pravatar.cc/150?u=b" />
            <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/150?u=c" />
            <Avatar alt="Agnes Walker" src="https://i.pravatar.cc/150?u=d" />
            <Avatar alt="Trevor Henderson" src="https://i.pravatar.cc/150?u=e" />
            <Avatar alt="Trevor Henderson" src="https://i.pravatar.cc/150?u=f" />
            <Avatar alt="Trevor Henderson" src="https://i.pravatar.cc/150?u=g" />
            <Avatar alt="Trevor Henderson" src="https://i.pravatar.cc/150?u=h" />
            <Avatar alt="Trevor Henderson" src="https://i.pravatar.cc/150?u=i" />
        </AvatarGroup>
    );
}
export default OnlineFriends;