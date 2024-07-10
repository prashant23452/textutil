import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpclick= ()=>{
        //console.log("Uppercase was clicked" +text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success")
    }
    const handleloclick= ()=>{
        //console.log("Uppercase was clicked" +text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");
    }
    const handleOnChange= (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }    
    const handleClear =() =>{
        setText('');
        props.showAlert("Text Cleared", "success")
    
    }
    const handleExtraSpace =() =>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed", "success");
    
    }
    const handleCopy =() =>{
        let tex=document.getElementById("myBox");
        tex.select();
        navigator.clipboard.writeText(tex.value);
        props.showAlert("copy to clipboard", "success");

    }
    const [text, setText] = useState('');
    // text ="new Text";//Wrong Way to use
   // setText ("new Text");//Correct  Way to use
  return (
    <>
    <div style={{color:props.mode==='dark' ? 'white' :'#042743'}}className="container">
        <h1 className='mb -2'>{props.heading} </h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark' ? '#13466e' :'white', color:props.mode==='dark' ? 'white' :'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Upper Case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloclick}>Convert to Lower Case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra space</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark' ? 'white' :'#042743'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text: "Nothing to preview here"}</p>
    </div>
    </>
  )
}