import React from 'react';
import Card from '../Card'
import { Container,Grid } from '@material-ui/core'
const home = () => {    
    return (
        <Container>
        <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Card />
            </Grid>
          ))}
        </Grid>
      </Grid>
        </Container>
    )
} 

export default home;