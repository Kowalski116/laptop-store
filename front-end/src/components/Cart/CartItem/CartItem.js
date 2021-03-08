import React from 'react'
import { Typography, Button, Card, CardAction, CardContent, CardMedia } from '@material-ui/core'
import useStyles from './styles'

const CartItem = ({ item }) => {
    const classes = useStyles()
    return (
        <Card>
            <CardMedia image={item.media} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h4'>{item.name}</Typography>
            </CardContent>
            <CardAction className={classes.Actions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small'>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size='small'>+</Button>
                </div>
                <Button variant='contained' type='button' color='secondary'>Remove</Button>
            </CardAction>
        </Card>
    )
}

export default CartItem
