/* zona de importaciones */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dogFact, setDogFact] = useState("");
  const [dogImage, setDogImage] = useState(); // En estos useState se guarda la información de la API (frase e imagen)

  const getAPIFact = async () => {
    fetch("https://some-random-api.ml/animal/dog") //fetch a la API para obtener los datos de perros
      .then((res) => res.json())
      .then((json) => {
        setDogFact(json.fact || "Dogs are cute"); // solo obtengo el fact (frase) y si esta viniera vacía por alguna razón, se muestra la frase "Dogs are cute"
      });
  };

  const getAPIImage = async () => {
    fetch("https://some-random-api.ml/animal/dog")
      .then((res) => res.json())
      .then((json) => {
        setDogImage(json.image); //Esta función es para obtener la imagen de los perros
      });
  };

  useEffect(() => {
    getAPIFact();
    getAPIImage();
  }, []); //cuando se carga "App", se hace el pedido de info a al API

  function getRandomDogs() {
    getAPIFact();
    getAPIImage();
  } //función creada para ser utilizada en el botón y que al hacer click muestre los distintos datos de la API (cambia el dato)

  return (
    <div className="App">
      <div className="centeredDiv">
        <h1>{dogFact}</h1>
        <img src={dogImage} alt="dogs" className="dogImage" />
        <button onClick={getRandomDogs}>Next Fact</button>
        {/* botón para cambiar frase e imagen */}
      </div>
    </div>
  );
}

export default App; //exportación componente funcional App

/* Comentario: este código no es escalable, es solo para realizar el challenge corto
No he creado otros componentes ni utilizado redux u otra herramienta para gestionar el estado de la app */
