'use client';
import { Grid, Card, TextField, Container } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { OrganisationCard } from './OrganisationCard';

type organisation = { 
    id: number,
    name: string
}

type organisations = organisation[];

const Feed: () => React.ReactElement = () => {

    const OrganisationCardList = () => {
        // to fix unique keys issue: https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js

        if (organisations.length == 1 && !organisations[0].id) {
            return
        } else {
            return (
                <>
                    <Grid sx={{pt: 2}} container spacing={2}>
                        {organisations.map((organisation) => {
                            return (
                                <Grid key={organisation.id} sx={{width: 1}} item justifyContent="center" alignItems="center">
                                    <OrganisationCard organisation={organisation}/>
                                </Grid>
                            )
                        })}    
                    </Grid>
                </>
            )
        }
    };

    useEffect(() => {
        const data: organisations = [
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

        setOrganisations(data);
    }, [])

    const [searchText, setSearchText] = useState('');
    // Record<PropertyKey, never> represents an empty object
    const [organisations, setOrganisations] = useState<organisations | Record<PropertyKey, never>[]>([{}]);

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
