import { useState } from 'react'
import Buttons from './Buttons'
import Display from './Display'


function App() {

  const [state, setState] = useState({
    arr: [],
    input: "",
    output: ""
  }) 


 const inputValue = (id) =>{
   setState({
     
     arr: state.arr.concat(id),
     input: id,
     output: id
     
   })
 }

 const clearValue = () =>{
   setState({
     arr: [],
     input: 0,
     output: ""
   })
 }


  return (
    <div className="App">
      <div className="display">
          <Display state={state} />
        </div>
        <div className="buttons">
          <Buttons inputValue={inputValue} clearValue={clearValue} state={state} />
        </div>
        
    </div>
  );
}

export default App;
