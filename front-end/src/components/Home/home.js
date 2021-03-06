import React from 'react';
import Card from '../Card'
import { Container,Grid } from '@material-ui/core'
import Category from './Fitter/category'
import Sort from './sort'
import ListItems from './listItems'
import Carousel from './carousel'
import Products from '../Products/Products'
const home = () => {    
    return (
      <>
      <Carousel />
        <Grid container spacing = {2}>
        <Grid item sm = {0} md = {3} lg = {3} justify="flex-start">
          <Category />
          <Category />
        </Grid>

        <Grid item sm = {12} md = {9} lg = {9} justify="flex-start">
        <Sort />
        {/* <ListItems /> */}
        <Products />
        </Grid>

        </Grid>
      </>
    )
} 

export default home;