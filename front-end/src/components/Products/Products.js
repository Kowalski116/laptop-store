import { Grid } from "@material-ui/core";
import React,{useState, useEffect} from "react"

import Product from './Product/Product'
import axios from 'axios'
import useStyles from './styles'

const Products = ({ products }) => {
    const classes = useStyles();
    
    return (
        <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Grid container justify="center" spacing={4}>
            {products.map((product) =>(
                <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}

        </Grid>
        </main>
     );
}
 
export default Products;