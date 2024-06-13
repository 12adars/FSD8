// import React from 'react'

// import ColorChange from './ColorChange'



//   import CompA from './CompA'
// import Clock from './Clock'
// import Bootstrap from './Bootstrap'
// import Card from './Card';
// import Navbar from './Navbar';
// import Contact from './Contact';
// import Login from './Login';
// import About from './About';
// import Sign from './Sign';
// import { Input as ReactTags } from 'react-tag-input';

 import {Route,Routes} from 'react-router-dom'


// import './New';


// const App = () => {
//   // let user='hello'
//   return (
    
//      <div>
//     //   {/* <h1></h1>
//     //   <Home a = {user}/> */}
//     //   {/* <CompA/> */}
//     //   {/* <Clock/> */}
//     //   {/* <Bootstrap/>
//     //   <Card/> */}
     
//        {/* <Navbar/>
//       <New/>


//        <Routes>
//       <Route path='/' element={<ColorChange/>} />
//       <Route path='/about' element={<About/>} />
//        <Route path='/contact' element={<Contact/>} />
//       <Route path='/login' element={<Login/>} />
//      <Route path='/sign' element={<Sign/>} />
//     </Routes>
//        */}
//        <New/>
//       </div>
   

    
//   )
// }



///New

// export default App

// import React from 'react'
// import New from './New'

// const App = () => {
//   return (
//     <div>
//       <New/>
//     </div>
//   )
// }

// export default App







/// form

// import React from 'react'
// import Form from './Form'

// const App = () => {
//   return (
//     <div>
//       <Form/>
//     </div>
//   )
// }

// export default App








/// context

// import React from 'react'
// import Context2 from './Context2'

// const App = () => {
//   let data='hello'
//   return (
//     <div>
//       <Context2 a={data}/>
//     </div>
//   )
// }

// export default App















///Cart


import React from 'react'
import Cart from './Cart'
import ViewCart from './ViewCart'



const App = () => {
  

  return (
    <>
  
    <Routes>
      <Route path='/' element={<Cart/>} />
    <Route path='/view' element={<ViewCart/>} />
    </Routes>
    
    </>
  )
}

export default App