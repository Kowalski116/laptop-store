import React from 'react';
import { Container } from '@material-ui/core'
import { Route, Link } from 'react-router-dom'

import useStyles from './styles'

import home from './components/Home/home'
import memories from './components/memories'
import Header from './components/Header/header'
import Footer from './components/Home/footer'

const App = () => {
    const classes = useStyles();

    return (
    <>
        <Header />
        <Container maxWidth = "lg" disableGutters>
        <Route  path ="/home" component = {home}/>
        <Route  exact path ="/" component = {memories}/>
        </Container> 
        <Footer />
    </>
        
    );

}
export default App;