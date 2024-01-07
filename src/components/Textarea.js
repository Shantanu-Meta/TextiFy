import React, {useState} from 'react'

export default function Textarea(prop) {
  document.title = "TexityFy | Home"
  let [text, setText] = useState('');

  function capitalize(){
    if(text===""){
      prop.showMsg("Enter text"); 
    }
    let newText = text.toUpperCase(); 
    setText(newText); 
  }
  function LowerCase(){
    if(text===""){
      prop.showMsg("Enter text"); 
    }
    let newText = text.toLowerCase(); 
    setText(newText); 
  }
  function LowerhtmlToJsx(){
    if(text===""){
      prop.showMsg("Enter code"); 
      return;
    }
    let newText = text.replaceAll("class=", "className="); 
    newText = newText.replaceAll("for=", "htmlFor=");
    if(!newText.startsWith("<>") && !newText.endsWith("</>")){
      newText = "<>" + newText + "</>"
      setText(newText) 
    }
  }

  // keep track of changes while typing in input field
  function trackOnChange(event){
    setText(event.target.value); 
  }

  return (
    <div className='w-full min-h-screen' style={prop.styleTheme}>
      <div className='w-[50%] mx-auto pt-[1rem]'>
          <h1 for="message" className="block mb-2 text-xl">{prop.heading}</h1>
          <textarea id="message" rows="4" className="textarea resize-none block p-2.5 w-full text-sm rounded-lg border border-gray-300 text-xl" style={{backgroundColor:prop.styleTheme.textAreaBg, color:prop.styleTheme.color}} placeholder={prop.placeHolder} onChange={trackOnChange} value={text} ></textarea>
          <button className='p-2 bg-gray-500 rounded-md text-white mt-5 focus:outline-none mr-5' onClick={capitalize}>Captalize</button>
          <button className='p-2 bg-gray-500 rounded-md text-white mt-5 focus:outline-none mr-5' onClick={LowerCase}>LowerCase</button>
          <button className='p-2 bg-gray-500 rounded-md text-white mt-5 focus:outline-none mr-5' onClick={LowerhtmlToJsx}>Html to JSX</button>
      </div>
      <div className='w-[50%] mx-auto mt-[1rem]'>
        <h1 className='text-xl font-bold'>Text Summary</h1>
        <p>words: {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} and charecters: {text.split("\n").join('').length}</p>
        <h1 className='text-xl font-bold mt-[1rem]'>Preview</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}
