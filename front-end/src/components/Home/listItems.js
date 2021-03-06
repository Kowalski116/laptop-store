import React from 'react';
import Card from '../Card'
import { Container,Grid } from '@material-ui/core'
import Category from './Fitter/category'

const ListItems = () => {
    return ( 
        <>
        
        <Grid container justify="flex-start" spacing={2}>
          {[0, 1, 2, 3, 4].map((value) => (
            <Grid key={value} item xs = {12} sm = {6} md = {4} lg = {3}>
              <Card />
            </Grid>
          ))}
      </Grid>
        </>
     );
}
 
export default ListItems;