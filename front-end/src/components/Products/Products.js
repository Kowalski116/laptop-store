import { Grid } from "@material-ui/core";
import React,{useState, useEffect} from "react"

import Product from './Product/Product'
import axios from 'axios'
import useStyles from './styles'
// const products = [
//     { id: 1, name: "Danh", description: "hehe", price:"$30", image: "https://vlink.com.vn/uploads/laptop_la_gi.jpg"},
//     { id: 2, name: "Dan", description: "hee", price:"$3", image:"https://vlink.com.vn/uploads/laptop_la_gi.jpg"},
// ]
let products = [{ id: 1, name: "Danh", description: "hehe", price:"$30", image: "https://vlink.com.vn/uploads/laptop_la_gi.jpg"}]

const Products = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/product')
        .then(res => {
            setProducts(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err))
        console.log(products)
    },[])
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