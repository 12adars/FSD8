import React, { useEffect, useState } from 'react'

const Form = () => {
    let [input,SetInput]=useState({
    FirstName:"",
    LastName:"",
    email:"",
    password:"",

    })
    let [data,setData]=useState(null)
    useEffect(()=>{
      let val=localStorage.getItem('Data')
      let newData=JSON.parse(val)
      console.log(newData,"rrr")
      setData(newData)

    },[])
    function Fun1(e){
        const{name,value}=e.target;

        
        SetInput({...input,[name]:value})
        console.log(input,"input")
    }
    const done=(e)=>{
     e.preventDefault();
    //  console.log('hehe');
     console.log(input);
     let a= JSON.stringify(input)
     localStorage.setItem('Data',a)
     setData(input)
     
    }
    function remove(){
      localStorage.clear('Data')
      setData(null)
    }
    
  return (
    <div>
        <form >
        <input type='text' name='FirstName' required onChange={Fun1} value={input.FirstName} placeholder='Enter the FirstName'/>
        <br/>
        <br/>
        <input type='text' name='LastName' required onChange={Fun1} value={input.LastName}   placeholder='Enter the LastName'/>
        <br/>
        <br/>
        <input type='email' name='email' required onChange={Fun1} value={input.email} placeholder='Enter the email'/>
        <br/>
        <br/>
        <input type='password' name='password'required onChange={Fun1} value={input.password}  placeholder='Enter the PassWord'/>
        <br/>
        <br/>
        <button type='submit'>Add</button>
        
        </form>
        {
          data?<>
          <h1>{data.FirstName}</h1>
          <h2>{data.LastName}</h2>
          <h2>{data.email}</h2>
          
          </>:<><h1>Data not found</h1></>
        }
        {
          data?(<button onClick={remove}>Remove</button>):""
        }
        
        
        


    </div>
  )
}

export default Form