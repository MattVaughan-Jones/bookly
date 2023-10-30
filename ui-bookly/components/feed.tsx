'use client';
import { Grid, TextField, Container } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { OrganisationCard } from './OrganisationCard';
import { gql, useQuery } from '@apollo/client';

type Organisation = { 
    id: String,
    name: String
}

const GET_ORGANISATIONS = gql`
    query GetOrganisations {
        organisations {
            id
            name
        }
    }
`;

const Feed = () => {

    const [searchText, setSearchText] = useState('');

    const { loading, error, data } = useQuery(GET_ORGANISATIONS);

    if (loading) return "Loading...";
  
    if (error) return `Error! ${error.message}`;

    return(
        <Container sx={{my: 2}}>
            <form>
                <TextField 
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                    value={searchText}
                    // onChange={handleSearchChange}
                    sx={{width: 1}}
                />
            </form>
            <Grid sx={{pt: 2, px: 0, width: 1}} container spacing={2}>
                {data.organisations.map((organisation: Organisation) => {
                    return (
                        <Grid key={organisation.id} sx={{width: 1}} item justifyContent="center" alignItems="center">
                            <OrganisationCard organisation={organisation}/>
                        </Grid>
                    )
                })}    
            </Grid>
        </Container>
    )
}

export { Feed };
