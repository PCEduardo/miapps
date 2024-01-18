import { useState } from "react";
import "./Miapp.css";
//Componente funcional 
//Esta funcion debe llamarse igual al archivo 
const App = () =>{
  const [contador, setContador] = useState(0);
  return (
    <>
      <h1>Hola mUndo</h1>
      <p>Eduardo Peña Corona</p>
      <h3>Contador: { contador }</h3>
      <button id="btn-inc" className="btns" onClick={ () => setContador(contador+1) }>Incrementacion</button>
      <button id="btn-dec" className="btns" onClick={ () => setContador(contador-1) }>Decrementa</button>
      <button id="btn-rei" className="btns" onClick={ () => setContador(0) }>Reinicia</button>
    </>)//Si se necesita mas de un elemento html se necesita colocarlo en un contenedor
  //A la etiqueta vacia <></> se le llama fragment, tambien es un contenedor creo 
}

export default App;