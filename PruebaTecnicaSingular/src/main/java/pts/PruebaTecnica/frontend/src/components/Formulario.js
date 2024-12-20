import React, { useState } from 'react';

function Formulario({ onSubmit, onNChange }) {
  const [n, setNValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(n);
    if(n == '') {
      document.getElementById("empty-span").style.display = "block";
    } else if(n <= 0){
       document.getElementById("error-span").style.display = "block";
       onNChange('');
    } else {
      onSubmit(n);
    }

    setNValue('');
  };

   const handleChange = (e) => {
      const nValue = e.target.value;

      if(nValue > 0) document.getElementById("error-span").style.display = "none";
      if(nValue != '') document.getElementById("empty-span").style.display = "none";

      onNChange(nValue);
      setNValue(nValue);
    }

  return (
  <>
    <form className="my-3" onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          <input
            type="number"
            value={n}
            onChange={handleChange}
            placeholder="Introduzca un número"
            className="form-control"
            id="inputNumber"
          />
          <button className="btn btn-primary" type="submit">Calcular</button>
        </div>
    </form>
    <span className="text-danger" id="error-span">
        ¡Error en el calculo! El número ingresado debe ser mayor a 0
    </span>
    <span className="text-danger" id="empty-span">
        ¡Error en el calculo! Debe proporcionar un número
    </span>
  </>
  );
}

export default Formulario;
