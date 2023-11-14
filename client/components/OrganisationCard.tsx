import { Card } from '@mui/material';
import * as React from 'react';

type Organisation = {
    name: String,
    id: String
}

type Props = {
    organisation: Organisation
}

export const OrganisationCard = ( { organisation }: Props ) => {
    return(
        <Card sx={{ pl: 2, border: '1px solid', width: 1, borderRadius: 2}}>
            <p>{organisation.name}</p>
        </Card>
    )
}
