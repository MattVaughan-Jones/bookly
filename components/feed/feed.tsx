'use client';
import { Grid, Card } from '@mui/material';
import * as React from 'react';

const Feed: () => React.ReactElement = () => {
    return(
        <>
            <Card sx={{ border: '1px solid', width: 1, borderRadius: 2 }}>
                <p>Here's some text</p>
            </Card>
        </>
    )
}

export { Feed };
