import React from 'react';

function Resultado({ resultado, n}) {
  return (
    <>
        <div className="result mt-2 rounded-1 p-4 d-flex flex-column align-items-center">
          <h6>Resultado de la Serie donde (n = <span style={{ color: '#1d4ed8' }}>{n}</span>):</h6>
          <h3>{resultado}</h3>
        </div>
    </>
  );
}

export default Resultado;