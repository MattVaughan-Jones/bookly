'use client';
// TODO - correctly implement MUI to allow SSR
import { Grid, Card, TextField, Container } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';

const OrganisationCard: any = ( organisation: any ) => {
    return(
        <Grid sx={{width: 1}} item justifyContent="center" alignItems="center">
            <Card sx={{ border: '1px solid', width: 1, borderRadius: 2, px: 2 }}>
                <p>{organisation.organisation.name}</p>
            </Card>
        </Grid>
    )
}

export { OrganisationCard };
