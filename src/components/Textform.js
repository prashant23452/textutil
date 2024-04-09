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
    const [text, setText] = useState('');
    // text ="new Text";//Wrong Way to use
   // setText ("new Text");//Correct  Way to use
  return (
    <>
    <div className="container">
        <h1>{props.heading} </h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert to Upper Case</button>
    <button className="btn btn-primary mx-3" onClick={handleloclick}>Convert to Lower Case</button>
    </div>
    <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
