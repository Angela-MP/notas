import { useState } from "react";
function App() {
  //Declaración de state: "hooks"
  const [inputState, setInputState] =  useState({
    titulo: "",
    fecha: "",
    nota: "",
  }); //valor inicial del State

  const handleInputChange= (event) => { 
    setInputState({
    ...inputState,
    [event.target.name]: event.target.value,
    });
   };
 //botón limpiar
  const handleInputClean = () => { 
    setInputState({
        titulo: "",
        fecha: "",
        nota: "",
    });
   }; 

  return (
    <div className="App container">
      <div className="row"> 
        <div className="col"> 
            <h3>Lista</h3> 
        </div>
        <div className="col">
      <h3>Notas</h3>
      <label className="mb-2">
        Título 
          <input 
            id="titulo" 
            name="titulo" 
            type="text" 
            onChange={handleInputChange}
            value={inputState.titulo} 
            />
      </label>   
      <br />    
      <label className="mb-2">
        Fecha
          <input 
            id="fecha" 
            name="fecha" 
            type="text" 
            onChange={handleInputChange}
            value={inputState.fecha} 
            />          
      </label>
      <br />
      <label htmlFor="nota">
        Nota
          <input 
            id="nota" 
            name="nota" 
            type="text" 
            onChange={handleInputChange}
            value={inputState.nota} 
            />          
      </label>
    </div>
    </div>
    <hr />         
    <div className="mt-2 mt-2">
      <button 
          type="button"
          className="btn btn-success" 
          onClick={handleInputClean}
      >
          Limpiar
      </button>      
    </div>

    </div>
  );
}

export default App;