
import {useState} from 'react'
const ColorChange = () => {
  const[Color,SetColor]=useState('blue');
  const changeColor=()=>{
    SetColor(Color==='white'?'red':'white');
  };
  return (
    <div style={{backgroundColor:Color,height:'100vh'}}>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default ColorChange