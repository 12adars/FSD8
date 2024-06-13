import React, { useEffect } from 'react'

const UseState = () => {
    const[Count,SetCount]=useState(0)
    const[city,SetCity]=usestate('Bhopal')

    const[data,SetData]=useState()
    const fun1=()=>{
        SetCount(Count+1)
    }
    const fun2=()=>{
        SetCity('Delhi')
    }
    useEffect(()=>{
        fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => console.log(json))
    })
  return (
    <div>
        <p>
        </p>
    </div>
  )
}

export default UseState