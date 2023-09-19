'use client';
// TODO - correctly implement MUI to allow SSR
import { Grid, Card } from '@mui/material';
import * as React from 'react';

const Feed: () => React.ReactElement = () => {
    return(
        <>
            <Grid sx={{pt: 1, px: 1}} container spacing={2}>
                <Grid sx={{width: 1}} item justifyContent="center" alignItems="center">
                    <Card sx={{ border: '1px solid', width: 1, borderRadius: 2, px: 2 }}>
                        <p>Here's some text</p>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export { Feed };
