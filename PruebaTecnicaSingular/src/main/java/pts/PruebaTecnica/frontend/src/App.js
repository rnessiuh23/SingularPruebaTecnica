import React, { useState } from 'react';
import Formulario from './components/Formulario';
import CalcularSerie from './components/CalcularSerie';
import Resultado from './components/ResultadoSerie';
import Formula from './ui/Formula';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [n, setN] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (value) => {
    setN(value);
  }

  const handleInputChange = (value) => {

    setInputValue(value);

    if(value == '') setResultado(null);

  }

  return (
    <div className="body-app d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4 align-items-center col-md-5">
          <div className="header-form d-flex justify-content-center p-3 fst-italic">
            <h2>Calculo de la serie de (n)</h2>
          </div>
          <Formula inputValue={inputValue}/>
          <Formulario onSubmit={handleSubmit} onNChange={handleInputChange}/>
          <CalcularSerie n={n} setResultado={setResultado}/>
          {resultado !== null && inputValue !== '' && <Resultado resultado={resultado} n={n} />}
      </div>
    </div>
  );
}

export default App;
