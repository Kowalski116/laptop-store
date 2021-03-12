import React from 'react'
import { Container, Typography, Button, Grid, } from '@material-ui/core'
import CartItem from './CartItem/CartItem'
import useStyles from './styles'

const Cart = ({ cart }) => {
    const classes = useStyles()
    const EmptyCart = () => {
        <Typography variant='subtitble1'>You have no item in your shopping cart, start adding some!</Typography>
    }
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={} />
                    </Grid>
                ))}
                <div className={classes.cartDetails} >
                    <Typography variant='h4'>Subtotal: {cart.subtotal}</Typography>
                    <div>
                        <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'>Empty Cart</Button>
                        <Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='secondary'>Checkout</Button>
                    </div>
                </div>
            </Grid>
        </>
    )
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3' gutterBottom>Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
