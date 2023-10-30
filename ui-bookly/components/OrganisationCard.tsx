import { Grid, Card, TextField, Container } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';

const OrganisationCard = ( props: any ) => {
    return(
        <Card sx={{ pl: 2, border: '1px solid', width: 1, borderRadius: 2}}>
            <p>{props.organisation.name}</p>
        </Card>
    )
}

export { OrganisationCard };
