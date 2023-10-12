import { Grid } from '@mui/material'
import React from 'react'

function GridSample() {
    return (<>
        <Grid container spacing={2}>
            <Grid item xl={3} sm={6}>
                <div style={{ borderStyle: 'solid' }}>
                    Hello
                </div>
            </Grid>
            <Grid item xl={3} sm={6}>
                <div style={{ borderStyle: 'solid' }}>
                    Hello
                </div>
            </Grid>
            <Grid item xl={3} sm={6}>
                <div style={{ borderStyle: 'solid' }}>
                    Hello
                </div>
            </Grid>
            <Grid item xl={3} sm={6}>
                <div style={{ borderStyle: 'solid' }}>
                    Hello
                </div>
            </Grid>
        </Grid>

    </>
    )
}

export default GridSample