
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>
    
{/* <Navbar title="TextUtils2" aboutText="About TextUtils"/> */}
<Navbar/>
{/* <Navbar title="TextUtils"/> */}
<div className="container my-3">
    <Textform heading="Enter the text to Analyze below"/>
    <About/>
</div>

</>
      
    
  );
}

export default App;
