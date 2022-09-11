import React from 'react';
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';

export default function AddBusiness() {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(data => data.json())
            .then(res => setData(res))
            .catch(error => console.log(error))
    }, [])

    return (
        <Autocomplete
            id="search-bar"
            size='small'
            options={data}
            getOptionLabel={(option) => option.title}
            fullWidth
            renderInput={(params) => <TextField {...params} label=""
                placeholder="Search"
                InputProps={{
                    ...params.InputProps,
                    startAdornment: (<InputAdornment position="start"> <SearchIcon />
                    </InputAdornment>),
                    style: { backgroundColor: 'white' } //
                }} />}
        />
    )
}