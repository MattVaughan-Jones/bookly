'use client'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';

export function SearchBar() {
    const [searchText, setSearchText] = useState('');
    
    return (
        <Container sx={{my: 2}}>
            <form>
                <TextField
                    data-testid="search bar"
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                    value={searchText}
                    // onChange={handleSearchChange}
                    sx={{width: 1}}
                />
            </form>
        </Container>
    )
}