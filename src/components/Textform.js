import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpclick= ()=>{
        //console.log("Uppercase was clicked" +text);
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleOnChange= (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    // text ="new Text";//Wrong Way to use
   // setText ("new Text");//Correct  Way to use
  return (
    <div>
        <h1>{props.heading} </h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpclick}>Convert to Upper Case</button>
    </div>
  )
}
