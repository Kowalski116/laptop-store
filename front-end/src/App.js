import React from 'react';
import { Grid } from '@material-ui/core'
import { Route, Link } from 'react-router-dom'


import { home, memories, Header, Footer, Navbar, Products } from './components'

const App = () => {    
    return (
    <>
        <Navbar />
        
        <Route  path ="/home" component = {Products}/>
        <Route  exact path ="/" component = {memories}/>

        {/* <Footer /> */}
    </>
        
    );

}
export default App;