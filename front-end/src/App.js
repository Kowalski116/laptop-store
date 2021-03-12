import React,{useState, useEffect} from "react"
import axios from 'axios'
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

import { home, memories, Header, Footer, Navbar, Products, Login, Signup, Checkout, CreateProduct, AdminProducts } from './components'

const App = () => {    
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems ] = useState([])
    const removeProductAdmin = (idProduct) => {
      axios.delete('/product/'+ idProduct)
        .then((res) => {
          console.log(res.data)
          setProducts(products.filter(product => product._id !== idProduct));
          console.log(products + 1)
        })
        .catch((err) => console.log(err))
      
      console.log("hahaha")
    }
    useEffect(()=>{
        axios.get('http://localhost:5000/product')
        .then(res => {
            setProducts(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err))

        //  
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
          <Route path ="/product/create">
            <CreateProduct />
          </Route>
          <Route path ="/admin/products">
            <AdminProducts products = {products}  removeProductAdmin={removeProductAdmin}/>
          </Route>
          <Route exact path="/">
            <memories />
          </Route>
        </Switch>
    </Router>
        
        {/* <Footer /> */}
    </>
        
    );

}
export default App;