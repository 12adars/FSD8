import React, { useState } from 'react'

const Clock = () => {
let [time,SetTime]= useState()
setInterval(()=>{
    let a= new Date().toLocaleTimeString()
    SetTime(a)
})



  return (
    <div>
        <h2>{time}</h2>
    </div>
  )
}

export default Clock