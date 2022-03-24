import { useState } from "react";

function App() {
  /*let varprueba = "Título";*/
  //Declaración de state: "hooks"
  const [tituloState, setTituloState] =  useState("")
  const [fechaState, setFechaState] =  useState("")
  const [notaState, setNotaState] =  useState("")

  const handleChangeTitulo= (event) => { 
    setTituloState(event.target.value);
   }

   const handleChangeFecha = (event) => { 
    setFechaState(event.target.value);
   }     

   const handleChangeNota = (event) => { 
    setNotaState(event.target.value);
   }  

   

  return (
    <div className="App">
      <h3>Notas</h3>

<br />
<label htmlFor="titulo">Titulo</label>
      <input 
        id="titulo" 
        name="titulo" 
        type="text" 
        onChange={handleChangeTitulo}
        value={tituloState} />
<br />    
    <label htmlFor="fecha">Fecha</label>
      <input 
        id="fecha" 
        name="fecha" 
        type="text" 
        onChange={handleChangeFecha}
        value={fechaState} />    
<br />
    <label htmlFor="nota">Nota</label>
      <input 
        id="nota" 
        name="nota" 
        type="text" 
        onChange={handleChangeNota}
        value={notaState} />     
    
    </div>
  );
}

export default App;
