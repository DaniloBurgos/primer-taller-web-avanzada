import React from 'react';
import CardNumber from "../CardNumber/CardNumber";
import CardHolders from "../CardHolders/CardHolders";
import './App.css';
import ExpirationDate from '../ExpirationDate/ExpirationDate';
import CVV from '../CVV/CVV';

function App() {

  //array decomposition
  //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
/*
  const [ tasks, setTasks ] = React.useState([]); aquí tasks es un estado que empieza con un string vacío
  const arreglo = React.useState(0);
  arreglo[0];
  arreglo[1](10);
*/

  const [ datos, setDatos ] = React.useState("");

  const handleCardNumberChange = (newText) => {
    setDatos(newText);
  }


  return (
    <div className="App">

    <p>{datos}</p>

    <form className="creditForm">
      <CardNumber
            onTextChange={handleCardNumberChange}
            value={datos}/>
      <CardHolders />
      <div className="innerForm">


      <ExpirationDate />
      <CVV/>

      </div>

      <button>
        Submit
      </button>

    </form>



    </div>
  );
}

export default App;
