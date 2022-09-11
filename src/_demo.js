import React from 'react'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import AddIcon from '@mui/icons-material/Add';
// import {styled} from '@mui/material';
import styled from '@emotion/styled';

const PinkButton = styled(Button)({
    backgroundColor: "#FF69B4",
    color: "#FFFFFF",
    margin: "0 5px",
    "&:hover":{
        backgroundColor: "#FFFFFF",
        color: "#FF69B4",
    }
})

const Demo = () => {
    return (
        <div>
            <div>
                <Button>Text</Button>
                <Button startIcon={<AddIcon />} variant="contained" color="success">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </div>
            <div>
                <Typography variant="h2">
                    Style as h2 but it's p tag
                </Typography>
            </div>
            <div>
                <Button
                size="small"
                variant='contained'
                disabled
                sx={{
                    "&:disabled":{
                        backgroundColor: "gray", color: "white"
                    },
                }}
                >
                    Custom
                </Button>
                <PinkButton variant="contained">Pink Button</PinkButton>
            </div>
        </div>
    )
}

export default Demo