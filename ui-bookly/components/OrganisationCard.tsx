import { Grid, Card, TextField, Container } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';

const OrganisationCard: any = ( organisation: any ) => {
    return(
        <Card sx={{ border: '1px solid', width: 1, borderRadius: 2, px: 2 }}>
            <p>{organisation.organisation.name}</p>
        </Card>
    )
}

export { OrganisationCard };
