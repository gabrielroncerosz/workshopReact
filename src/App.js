//const React=requiere('react')
import React , {useState} from 'react';
import {render} from 'react-dom'
import logo from './logo.svg';
import './App.css';
//const App = () =>{
//    const [variable,setVariable] = useState('gabriel')
//    return(
//    <div>{variable , variable2}</div>
//    
//    )
//}
//export default App
    const App = () =>{
    const [variable,setVariable] = useState(0)
    const sumar =() => {
        setVariable(variable+1)
    }
    const restar=() =>{
        setVariable(variable-1)
    }
   return(
       <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            
            <button onClick={sumar} >
            sumar
            </button>

            <div>{variable}</div>

            <button onClick={restar} >
            -
            </button>
            <div>

        </div>
            
        </div>
       </div>
   )
   
}


  export default App;

