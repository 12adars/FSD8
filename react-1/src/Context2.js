import React from 'react'
import Context3 from './Context3'

const Context2 = (dolly) => {
    console.log(dolly,"dolly chai wala")
  return (
    <div>
     <Context3 b={dolly.a}/>
    </div>
  )
}

export default Context2