import React, { useState } from 'react'
import { Container, Typography, Button, Grid, Card,CardActions, CardContent, CardMedia } from '@material-ui/core'
import useStyles from './styles'
import { Link } from 'react-router-dom'


const Products = ({ products, removeProductAdmin }) => {
    const classes = useStyles()
    const EmptyCart = () => {
        <Typography variant='subtitble1'>You have no item in your list products, start adding some!</Typography>
    }
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {products.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <Card>
                            <CardMedia image={item.image} alt={item.name} className={classes.media} />
                            <CardContent className={classes.cardContent}>
                                <Typography variant='h4'>{item.name}</Typography>
                            </CardContent>
                            <CardActions className={classes.Actions}>
                                <div className={classes.buttons}>
                                    <Button type='button' size='small'>-</Button>
                                    <Typography>{item.quantity}</Typography>
                                    <Button type='button' size='small'>+</Button>
                                </div>
                                <Button variant='contained' type='button' color='secondary' onClick={(e) => removeProductAdmin(item._id)}>Remove</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
                <div className={classes.cartDetails} >
                    <Typography variant='h4'>Subtotal: </Typography>
                    <div>
                        <Button component={Link} to ='/product/create' className={classes.checkoutButton} size='large' type='button' variant='contained' color='secondary'>Add Product</Button>
                    </div>
                </div>
            </Grid>
        </>
    )
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3' gutterBottom>Your Shopping Cart</Typography>
            { products ? <FilledCart /> : <EmptyCart />}
        </Container>
    )
}

export default Products
