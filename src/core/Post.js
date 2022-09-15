import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Post1 from "../post1.jpeg"
import Post2 from "../post2.jpeg"
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const post_data = [
    { user: "H", user_name: "Happy Face", date: "December 25, 2022", image: Post1, description: `"Only going places that spark joy." Happiness is not a station you arrive at, but a manner of traveling.I am one of those who never knows the direction of my journey until I have almost arrived.` },
    { user: "N", user_name: "Peace Nature", date: "December 25, 2022", image: Post2, description: `"Only going places that spark joy." Happiness is not a station you arrive at, but a manner of traveling.I am one of those who never knows the direction of my journey until I have almost arrived.` },
];

const PostCard = () => {
    return (
        <>
            {post_data.map((item, index) => (
                <Card sx={{ mb: 2 }} key={index}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: pink[500] }}>
                                {item.user}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={item.user_name}
                        subheader={item.date}
                    />
                    <CardMedia
                        component="img"
                        image={item.image}
                        alt="my post"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton>
                            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color="error" />} />
                        </IconButton>
                        <IconButton>
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
        </>
    );
}
export default PostCard