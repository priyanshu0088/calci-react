
import { useState } from 'react';
import './App.css';

function App() {

  const [text,settext] =useState("");

  const handleonchange = (e) =>{
    settext(text.concat(e.target.name));
  }

  const Allempty = () =>{
    settext("");       
  } 

  const backspace =()=>{
    settext(text.slice(0,-1));
  }

  const result = () =>{
    try{
      settext(eval(text).toString());
    } catch(err){
      settext("Error")
    }
  } 
  
  return (
    <div className="container">
        
      <div className="center"><input className='input-no' value={text} type="text" />
      <div className="calc-btn">
        <button name='1'  onClick={handleonchange} className='butn'>1</button>
        <button  name='2' onClick={handleonchange} className='butn'>2</button>
        <button  name='3' onClick={handleonchange} className='butn'>3</button> 
        <button   onClick={backspace} className='special' id='backspace'>X</button>
        <button  name='4' onClick={handleonchange} className='butn'>4</button>
        <button  name='5' onClick={handleonchange} className='butn'>5</button>
        <button  name='6' onClick={handleonchange} className='butn'>6</button>
       
        <button name='/' onClick={handleonchange}  className='special'>/</button>
        <button name='7' onClick={handleonchange} className='butn'>7</button>
        <button  name='8' onClick={handleonchange} className='butn'>8</button>
        <button name='9' onClick={handleonchange} className='butn'>9</button>                          
        <button  name='*' onClick={handleonchange} className='special'>*</button>
        <button  name='0' onClick={handleonchange} className='butn'>0</button>
      
        <button name='+'  onClick={handleonchange} className='butn' >+</button>
        <button  name='-'onClick={handleonchange} className='butn' >-</button>
        
        <button  name='.' onClick={handleonchange}className='special' id='dot' >.</button>
        <button  onClick={Allempty} className='special' id='clear-all'>clear</button>
        <button  onClick={result} className='butn' id='result'>=</button>
        
</div>
        </div>
    </div>
  );
}

export default App;
