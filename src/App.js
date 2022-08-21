import './App.css';
// ,{ useState }
import TextForm from './components/TextForm';
// import About from './components/About';
import Navbar  from './components/Navbar';
import React ,{ useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


// import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
 
// using CommonJS modules
// const BrowserRouter = require("react-router-dom").BrowserRouter;
// const Route = require("react-router-dom").Route;
// const Switch = require("react-router-dom").Switch;



// let name = "gourav";

function App() {
  const [alert ,setAlert] = useState('null');

  const showAlert = (message ,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
       showAlert(null)
    }, 3000);
  }
const [mode, setMode] = useState('dark');
const toggleMode = ()=>{
  if(mode === 'light'){
  setMode('dark')
  document.body.style.color= 'white'
  document.body.style.backgroundColor ='#042743';
  showAlert("light is on", 'success')
}
else{
  setMode ('light')
  document.body.style.color= 'black'
  document.body.style.backgroundColor ='white';
  showAlert("dark is on", 'success')


}
}
  return (
    <>
    {/* <Router>
    <Navbar title='TextUtile' mode={mode}  toggleMode={toggleMode} /> 
    <Alert alert = {alert} />
    <div className="mb-3 container"> */}
      {/* <Switch> */}
      {/* <Route path="/">  ek gantaa brabad kiyaa tha kiyo */ }
      
       {/* <Route exact path="/about">
        <About />
       </Route>
       <Route exact path="/">
        <TextForm showAlert={showAlert} heading= "Enter the text to analyze"/>
       </Route> */}
       
      {/* </Switch> */}
    {/* </div> */}
    {/* </Router> */}


    <Navbar title='TextUtile' mode={mode}  toggleMode={toggleMode} /> 
    <Alert alert = {alert} />
    <div className="mb-3 container"> 
    <TextForm showAlert={showAlert} heading= "Enter the text to analyze"/>
    </div>

    </>
  );
}

export default App;
