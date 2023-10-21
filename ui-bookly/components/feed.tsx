'use client';
import { Grid, Card, TextField, Container } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { OrganisationCard } from './OrganisationCard';
import { gql, useQuery } from '@apollo/client';

type organisation = { 
    id: number,
    name: string
}

type organisations = organisation[];

const Feed: () => React.ReactElement = () => {

    const OrganisationCardList = () => {
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

    const GET_ORGANISATIONS = gql`
        query GetOrganisations {
            organisations {
                id
                name
            }
        }
    `;
        
    const { loading, error, data } = useQuery(GET_ORGANISATIONS)
    console.log(data);

    useEffect(() => {
        // const data: organisations = [
        //     {
        //         id: 1,
        //         name: 'org 1',
        //     },
        //     {
        //         id: 2,
        //         name: 'org 2',
        //     },
        //     {
        //         id: 3,
        //         name: 'org 3',
        //     }
        // ];

        
        // setOrganisations(data);
    }, [])

    const [searchText, setSearchText] = useState('');
    // Record<PropertyKey, never> represents an empty object
    const [organisations, setOrganisations] = useState<organisations | Record<PropertyKey, never>[]>([{}]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    }

    return(
        <Container sx={{my: 2}}>
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
            <Grid sx={{pt: 2, px: 2}} container spacing={2}>
                <OrganisationCardList/>
            </Grid>
        </Container>
    )
}

export { Feed };
