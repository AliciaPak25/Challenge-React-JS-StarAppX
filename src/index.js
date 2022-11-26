/* zona de importaciones */
import React from "react";
import ReactDOM from "react-dom/client"; //importación ReactDOM del lado del cliente (frontend)
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> //React en modo estricto
);
/* Desde ReactDOM se obtiene el id "root" para mostrar toda la app a través del método getElementById de JavaScript
Esta app se renderiza en un solo HTML porque React funciona como SPA (single page application)
*/
