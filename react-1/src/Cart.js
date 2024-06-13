import React, { useEffect, useState } from "react";
import Cart_Data from "./dummyFoodData";
import"./Cart.css";

import { Routes, Route } from "react-router-dom";
import { NavLink ,useNavigate} from "react-router-dom";

// import New_Cart_Page from "./New_Cart_Page";

function Cart_Code() {
  const[cart,setCart]=useState([])
  const [cartData, setcartData] = useState([]);
      let n=      useNavigate()
  

  useEffect(() => {
    // setcartData(Cart_Data)
    setcartData(Cart_Data.map((item) => ({ ...item, quantity: 0 })));
    // console.log(Cart_Data);
  }, []);

  

  const addToCart = (id) => {
    console.log(id);
    const UpdateCart = cartData.map((data) =>
      data.id === id ? { ...data, quantity: 1 } : data
      
    );
   

    setcartData(UpdateCart);
    const producttoAdd={...cartData.find(item=>item.id===id),quantity:1};
  
  
    setCart([...cart,producttoAdd])
    console.log(cart,"cartttttttttttt");
  };
  

  const handleAdd = (id) =>{
    const UpdateCart = cartData.map(item => 
      item.id === id && item.quantity>0 ? ({ ...item, quantity: item.quantity + 1 }) : item 
    )     
    setcartData(UpdateCart);
  }

  const handleRemove = (id) =>{
    const UpdateCart = cartData.map(item => 
      item.id === id && item.quantity>0 ? ({ ...item, quantity: item.quantity - 1 }) :item
    )
    setcartData(UpdateCart);
  }

  const getTotalPrice = () => { 
    return cartData.reduce((total, item) => total + item.price * item.quantity, 0); 
};
  
function view(){
  const filteredcart= cartData.filter(item=>item.quantity>0);
  let price=getTotalPrice()
    n('/view',{state:{cart:filteredcart,price}});
   
};




  return (
    <div>
    
      <div className="cart-container">
        <p>
          <h2>Cart</h2>
        </p>

        <ul className="cart-items">
          {cartData.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />

              <div className="item-detail">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price : ${item.price}</p>
                <p>Quantity : {item.quantity}</p>

                {item.quantity === 0 ? (
                  <button onClick={() => addToCart(item.id,item)}>
                    Add to Cart
                  </button>
                ) : (
                  <>
                    {" "}                                                                       
                    <button onClick={()=>handleAdd(item.id)}> + </button> <button onClick={()=> handleRemove(item.id)}> - </button>{" "}
                  </>
                )}
              </div>
            </li>
          ))}

          <div class='hadding'><h1>BUY ITEM</h1>  <p>TotalPrice: ${getTotalPrice()}</p> </div>

        </ul>

        {/* <button></button> */}
      </div>

      <button  className="view" onClick={view} > viewCart({cartData.filter(item=>item.quantity>0).length})</button>
    </div>
  );
}

export default Cart_Code;