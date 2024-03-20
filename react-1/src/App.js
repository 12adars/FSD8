import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './Home'

  import CompA from './CompA'
import Clock from './Clock'
import Bootstrap from './Bootstrap'
import Card from './Card';

const App = () => {
  // let user='hello'
  return (
    <div>
      {/* <h1></h1>
      <Home a = {user}/> */}
      {/* <CompA/> */}
      {/* <Clock/> */}
      <Bootstrap/>
      <Card/>
    </div>
  )
}

export default App