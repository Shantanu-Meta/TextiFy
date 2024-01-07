import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';



export default function App() {
  // themes array
  const themes = [{
    color:"black", 
    backgroundColor:"white", 
    textAreaBg: "#ececec94",
    alertBg:"bg-blue-50",
    alertText:"text-blue-800",
    id:0,
  }, 
  {
    color:"white", 
    backgroundColor:"#266291", 
    textAreaBg: "#002c4e",
    alertBg:"bg-blue-50",
    alertText:"text-blue-800",
    id:1,
  },
  {
    color:"white", 
    backgroundColor:"#1a0922", 
    textAreaBg: "#320c3dab",
    alertBg:"bg-gray-800",
    alertText:"text-blue-400",
    id:2,
  }, 
  {
    color:"white", 
    backgroundColor:"#220b09", 
    textAreaBg: "#5c1802",
    alertBg:"bg-blue-50",
    alertText:"text-blue-800",
    id:3,
  }]

  const [theme, setTheme] = useState(themes[0])

  function toggle(index){
     setTheme(themes[index]); 
  }

  const [msg, setMsg] = useState(""); 
  function handleMsg(message){
    setMsg(message); 
    setTimeout(()=>{
      setMsg(""); 
    }, 3000)
  }

  return (
      <>
        <Navbar company="Textify" function={toggle}  styleTheme={theme}/>
        <Alert message={msg} styleTheme={theme}/>
        <Routes>
          <Route exact path='/' element={<Textarea heading="Enter your notes here" placeHolder="Type your notes to convert.." styleTheme={theme} showMsg={handleMsg}/>} />
          <Route path='/About' element={<About styleTheme={theme}/>}/>
        </Routes>
        

        </>
  )
}

