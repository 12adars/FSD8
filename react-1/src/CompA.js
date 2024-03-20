import React, { useState } from 'react'

const CompA = () => {
  // let Count=0
  // const fun1=()=>{
  //   Count++
  //   console.log(Count)
  // }
  let [Count,setCount]=useState(0)
  const fun1=()=>{
    setCount(Count+1)
  }
  const fun2=()=>{
    setCount(Count--)
  }
  const fun3=()=>{
    setCount(0)
  }
  // let [data,setdata]=useState('hii')
  // const fun1=()=>{
  //   setdata('hollo')
  // }
  return (
    <div>
      <p>{Count}</p>
      {/* <p>{data}</p>
      <h1>{setdata}</h1> */}
      <button style ={{color:'red'}}onClick={fun1}>Increment</button>
      <button style={{color:'red'}}onClick={fun2}>Decrement</button>
      <button onClick={fun3}>Reset</button>
    </div>
  )
}

export default CompA