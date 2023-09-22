'use client';
// TODO - correctly implement MUI to allow SSR
import { Grid, Card, TextField, Container } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { OrganisationCard } from './OrganisationCard';

const OrganisationCardList = () => {
    const organisations: {id: number, name: string}[] = [
        {
            id: 1,
            name: 'org 1',
        },
        {
            id: 2,
            name: 'org 2',
        },
        {
            id: 3,
            name: 'org 3',
        }
    ];

    return (
        <>
            <Grid sx={{pt: 2}} container spacing={2}>
                {organisations.map((organisation: any) => {
                    return (
                        <OrganisationCard organisation={organisation} key={organisation.id}/>
                    )
                })}    
            </Grid>
        </>
    )
};

const Feed: () => React.ReactElement = () => {

    const [searchText, setSearchText] = useState('');
    const [organisations, setOrganisations] = useState([]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    }

    return(
        <Container sx={{my: 2}}>
            <section>
                <form>
                    <TextField 
                        id="outlined-basic"
                        label="Search"
                        variant="outlined"
                        value={searchText}
                        onChange={handleSearchChange}
                        sx={{width: 1}}
                    />
                </form>
            </section>
            <Grid sx={{pt: 2, px: 2}} container spacing={2}>
                <OrganisationCardList/>
            </Grid>
        </Container>
    )
}

export { Feed };
