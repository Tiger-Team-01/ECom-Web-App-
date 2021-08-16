import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import { Route } from "react-router-dom";
import { GetProduct } from "./actions";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {

  const Products = useSelector(state => state.Product)
  const [drawer, setdrawer] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => 
     
    dispatch(GetProduct(50))
  
    , [dispatch]);


  return (
    <div className="App">

      <NavBar setDrawer={setdrawer} />
      <Cart drawer={drawer} setdrawer={setdrawer} />
      <Route path="/:id"><ProductDetails setDrawer={setdrawer}/></Route>
      <Route path="/" exact>
        {
          Products.length > 0 ?
            <ProductList />
            :
            <div className="d-flex justify-content-center align-items-center bg-primary" style={{ height: "100vh" }}>
              <h1>Loading...</h1>
            </div>
        }
      </Route>
    </div>
  );
}

export default App;
