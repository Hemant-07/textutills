import React, {useState} from 'react'


export default function Textform(props) {

  const handleUpClick = () =>{
    console.log("uppper case was clicked"+ text);

    let newText = text.toUpperCase();
     setText(newText);
     props.showAlert("converted to uppercase","success")
    }
  const handleLoClick = () =>{
    console.log("uppper case was clicked"+ text);

    let newText = text.toLowerCase();
     setText(newText);
     props.showAlert("converted to lowercase","success")
  } 

  const handleOnChange = (event) =>{
    console.log("on change");
    setText(event.target.value);
  }


  const [text, setText] = useState('');

 // text = "new text";

  // setText  ("new text");

  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
      <h1 > {props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control"  value = {text} onChange = {handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-2" onClick = {handleUpClick} > Convert to upper-case</button>
<button className="btn btn-primary mx-2 my-2 "onClick = {handleLoClick} > Convert to lower-case</button>
    </div>  
    <div className="container" my-2  style={{color:props.mode === 'dark'?'white':'#042743'}}>
      <h1> your text summary</h1>
      <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length}  chracters </p>
      <p> {0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read </p>
      <h2> preview </h2>
      <p> {text.length>0?text:"enter something to preview it here"} </p>
    </div>
    </>
    
  )
  
}