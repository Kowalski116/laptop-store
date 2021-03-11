import React,{useState, useEffect} from "react"
import axios from 'axios'
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";


import { home, memories, Header, Footer, Navbar, Products, Login, Signup, Checkout } from './components'

const App = () => {    
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems ] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/product')
        .then(res => {
            setProducts(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err))

        axios.get('http://localhost:5000/cart')
    },[])
    return (
    <>
    <Router>
        <Navbar />

        <Switch>
          <Route path ="/home">
            <Products products = {products} />
          </Route>
          <Route path ="/login">
            <Login />
          </Route>
          <Route path ="/signup">
            <Signup />
          </Route>
          <Route path ="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <memories />
          </Route>
        </Switch>
    </Router>
        
        {/* <Footer /> */}
    </>
        
    );

}
export default App;