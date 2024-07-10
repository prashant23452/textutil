import React, { useState} from 'react'

export default function About(props) {
    // const[myStyle, setMyStyle]= useState({
    //     color: 'black',
    //     backgroundColor: 'white' 
    // })
      
    // const[btnText, setBtnText]= useState("Enable Dark Mode")
    // const toggleStyle= ()=>{
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black' ,
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white' 
    //         })
    //         setBtnText("Enable Dark mode")
    //     }
    // }
    let myStyle={color: props.mode === 'dark'? 'white':'rgb(7 36 59)',
      backgroundColor: props.mode === 'dark'? 'rgb(7 36 59)':'white',
      border:'2px solid',
      borderColor:props.mode === 'dark'? 'white':'rgb(7 36 59)'

    }
  return (
    <div className="container" style={{color: props.mode === 'dark'? 'white':'rgb(7 36 59)'}}>
        <h1 className="my-2">About us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Textutils gives you a way to analyze your text quickly and efficiently. be it word count or character count or </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <strong>Free to use </strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Textutils is a free charactercounter tools tha provides instant character count & word count statistics
        for a given text. Textutils reports the number of words and character. thus it is suitable for writing text
        with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <strong>Browser Compatible </strong>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse"  style={myStyle} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">This word counter software works in any web browsers such as chromes, Firefox, Internet Explorer, Safari, Opera. It 
        suits to count character in facebook, blog, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>
{/* <button type="button" onClick={toggleStyle}className="btn btn-primary my-2">{btnText}</button> */}
    </div>
  )
}