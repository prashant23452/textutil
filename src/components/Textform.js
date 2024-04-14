import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpclick= ()=>{
        //console.log("Uppercase was clicked" +text);
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleloclick= ()=>{
        //console.log("Uppercase was clicked" +text);
        let newText= text.toLowerCase();
        setText(newText);
    }
    const handleOnChange= (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleClear =() =>{
        setText('');
    }
    const handleExtraSpace =() =>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleCopy =() =>{
        let tex=document.getElementById("myBox");
        tex.select();
        navigator.clipboard.writeText(tex.value);

    }
    const [text, setText] = useState('');
    // text ="new Text";//Wrong Way to use
   // setText ("new Text");//Correct  Way to use
  return (
    <>
    <div style={{color:props.mode==='dark' ? 'white' :'#042743'}}className="container">
        <h1>{props.heading} </h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark' ? 'grey' :'white', color:props.mode==='dark' ? 'white' :'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Upper Case</button>
    <button className="btn btn-primary mx-1" onClick={handleloclick}>Convert to Lower Case</button>
    <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra space</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark' ? 'white' :'#042743'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text: "Enter Something in the text  box above to preview here"}</p>
    </div>
    </>
  )
}
