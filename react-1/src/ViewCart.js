import React from 'react'
import { useLocation } from 'react-router-dom'
import"./Cart.css";
import { useState } from 'react';

const ViewCart = () => {
  const location=useLocation();
  const{cart,price}=location.state;
  let [dcart,setCart]=useState(cart)
  let [a,seta]=useState(price)
  
  console.log(location.state,price,'ghyuyuyuyu');
  return (
    <>
    <h2>TotalPrice:{price}</h2>
       <h2>your order list</h2>
       <ol>
       {
        cart.map((data)=>{
          return(<>
          <h3> {data.name}-quantity-{data.quantity}</h3>
          <button>+</button>
          <button>-</button>
          </>)
        })
       }
       </ol>

    </>
  )
}

export default ViewCart