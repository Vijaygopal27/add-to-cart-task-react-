import logo from "./logo.svg";
import "./App.css";
import Product from "./product";
import {useState} from "react"

function App() {
  let products = [
    { itemName: "iPhone", price: "50000", description: "excelent" },
    { itemName: "Oneplus", price: "40000", description: "excelent" },
    { itemName: "Pocof1", price: "20000", description: "excelent" },
    { itemName: "ROG", price: "70000", description: "excelent" },
  ];

const[cartItems,setCartItem] =useState([])

function handelAddtoCart(product) {
  setCartItem([...cartItems,product])
}


  return (
    <>
      <div className="container">
        <div className="row">
          <div class="col-lg-3">
            <h1 class="my-4">YOUR BAG</h1>
            <div class="list-group">
              {
                cartItems.map((product)=>{
                  return <a href="#" class="list-group-item">{product.itemName} -Rs. {product.price}</a>
                  
                })
              }
              
             
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
             {
               products.map((product) =>{
                 return <Product data={product} handelAddtoCart={handelAddtoCart}></Product>
               })
             }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
