'use client';
import { Grid, Card } from '@mui/material';
import * as React from 'react';

const Feed: () => React.ReactElement = () => {
    return(
        <>
            <Grid sx={{mt: 4}} spacing={2}>
                <Grid justifyContent="center" alignItems="center">
                    <Card sx={{ border: '1px solid', width: 1, borderRadius: 2 }}>
                        <p>Here's some text</p>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export { Feed };
