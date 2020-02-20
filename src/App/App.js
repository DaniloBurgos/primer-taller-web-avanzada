import React from 'react';
import CardNumber from "../CardNumber/CardNumber";
import './App.css';

function App() {

  //array decomposition
  //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
/*
  const [ tasks, setTasks ] = React.useState([]); aquí tasks es un estado que empieza con un string vacío
  const arreglo = React.useState(0);
  arreglo[0];
  arreglo[1](10);
*/

  const [ datos, setDatos ] = React.useState([]);

  return (
    <div className="App">

      <CardNumber />

    </div>
  );
}

export default App;
