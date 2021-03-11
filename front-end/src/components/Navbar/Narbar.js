import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import useStyles from './styles'
const Narbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color="inherit" component={Link} to='/home'>
                        <img src = {logo} alt="commerce" height="25px" className={classes.image} />
                        Laptop
                    </Typography>
                    <div className={classes.grow} />
                    <div>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>   
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Narbar
