
import { useState } from 'react'
import Input from "./components/Input";
import Button from './components/Button'



function App() {

  //Estate Form
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  //Estate Error
/*   const [error, setError] = useState(false) */

  //Function Antes de enviar el Formulario
  const errorValidation = (e) => {
    e.preventDefault();

    //Validation
    if (name === '' || password === '') {
    /*   setError(true) */


      return
    }
   /*  setError(false) */


  }

  

  return (
    <div className="App" >
      
      <Input onChange={errorValidation} setNombre={setName} setPassword={setPassword} />
      {(name !=='' && password==='252525' ) ? <Button/>:null }

     {/*  <Product 
      error={error} /> */}
     
      
    </div>
  );
}

export default App;
