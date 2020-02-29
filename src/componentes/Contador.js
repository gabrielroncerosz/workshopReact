import React , {useState} from 'react';


const App = (props) =>{
    const [variable,setVariable] = useState(0)
    const {nameA,lastNameA} =props
    const sumar =() => {
        setVariable(variable+1)
    }
    const restar=() =>{
        setVariable(variable-1)
    }
    return(
        <div>
            {lastNameA} , {nameA}
    <button onClick={sumar} >
        sumar
        </button>

        <div>{variable}</div>

        <button onClick={restar} >
        -
        </button>
        
        </div>
    )
}

  export default App;
