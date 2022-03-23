function App() {
  let varprueba = "Título"

  const handleChangePrueba = (event) => { 
    //console.log(event.target.name, event.target.value);
    varprueba = event.target.value
    //console.log (varprueba);
   }

  return (
    <div className="App">
      <h3>Notas</h3>
      <label htmlFor="pruebaID">Input de prueba</label>
      <input id="pruebaID" name="prueba" type="text" 
      onChange={handleChangePrueba}
      value={varprueba}/>

    </div>
  );
}

export default App;
