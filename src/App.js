
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
function App() {
  const [mode, setMode]= useState('light');
  const [alert,setAlert]= useState(null);
  const showAlert= (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() =>{
        setAlert(null);
      },1500)
  }
  const toggleMode= () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark mode has been enabled ","sucess");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white';
      showAlert("light mode has been enabled ","sucess");
    }
  }
  return (
    <>
    
{/* <Navbar title="TextUtils2" aboutText="About TextUtils"/> */}
{/* <Navbar/> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
    <Textform showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode}/>
    <About/>
</div>

</>
      
    
  );
}

export default App;