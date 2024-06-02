
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
      document.title=" TextUtils- Dark Mode ";
      // setInterval(() =>{
      //   document.title=" TextUtils is Amazing ";
      // },2000)
      // setInterval(() =>{
      //   document.title=" Install TextUtils Now ";
      // },1500)
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white';
      showAlert("light mode has been enabled ","sucess");
      document.title=" TextUtils- Light Mode ";
    }
  }
  return (
    <>
    
{/* <Navbar title="TextUtils2" aboutText="About TextUtils"/> */}
{/* <Navbar/> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<Switch>
          <Route path="/about">
            <About />
          </Route>
         
        </Switch>
    {/*<Textform showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode}/>*/}
    <About/>


</>
      
    
  );
}

export default App;