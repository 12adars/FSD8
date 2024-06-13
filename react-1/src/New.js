import React, { useState } from 'react'

const New = () => {
  const[input,setInput]=useState()
  const[data,setData]=useState([])
  const  fun1=(e)=>{
setInput(e.target.value)
  }

  const add=()=>{
    setData([...data,input])
    setInput('')
  }

  function delet(id){
    let newArray = data.filter((val,index)=>{
      return index!=id
    })
    setData(newArray)
  }
  return (
    <div>
      <input name='input' value={input} type='text'onChange={fun1} placeholder='Enter tour Todo'/>
      <button onClick={add}>Add</button>
      {
        data.map((a,b,c)=>{
          return(<>
          <li>{a}</li>
          <button onClick={()=>delet(b)}>Delete</button>
          </>)
        })
      }
    </div>
  )
}

export default New