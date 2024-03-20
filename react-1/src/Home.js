import React from 'react'
import CompA from './CompA'

const Home = (data) => {
  let arr=[1,2,3,4,5]
  return (
    <div>
      {
        arr.map((a,b)=>{
        return (
          <li key={b}>{a} </li>
        )
        })
      }
      {/* {<h2>{data.a}</h2>} */}
      {<CompA b={data.a}/>}
    </div>
    
  )
}


export default Home