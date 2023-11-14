'use client';
import { Grid, Container } from '@mui/material';
import * as React from 'react';
import { OrganisationCard } from './OrganisationCard';
import { gql, useQuery } from '@apollo/client';

type Organisation = { 
    id: string,
    name: string
}

export const GET_ORGANISATIONS = gql`
    query GetOrganisations {
        organisations {
            id
            name
        }
    }
`;

export const Feed = () => {

    const { loading, error, data } = useQuery(GET_ORGANISATIONS);

    if (loading) return "Loading...";
  
    if (error) {
        console.log(error.message)
        return ('Error: unable to retrieve feed')
    }

    return (
        <Container sx={{my: 2}}>
            
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
