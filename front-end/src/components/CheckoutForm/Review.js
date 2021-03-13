import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

const checkoutItem = []
const checkouttoken = []

const Review = () => {
    return (
        <>
            <Typography variant='h6' gutterBottom>Order summary</Typography>
            <List disablePadding>
                {/* {checkoutItem.live.line_item.map((product) => {
                    <ListItem style={{padding: '10px 0'}} key={product.name}>
                        <ListItemText primary={product.name} secondary={`Quanity: ${product.quantity}`}/>
                        <Typography variant='body2'>{product.total}</Typography>
                    </ListItem>
                })} */}
                <ListItem style={{padding: '10px 0'}} key=''>
                        <ListItemText primary="haha1" secondary={`Quanity: 100`}/>
                        <Typography variant='body2'>hehe</Typography>
                    </ListItem>
                <listItem style={{padding: '10px'}}>
                    <ListItemText primary="Total" />
                    <Typography variant='subtitle1' style={{fontWeight: 700}}>
                        Tong cong 120k                    </Typography>
                </listItem>
            </List>
        </>
    )
}

export default Review
