import { useEffect, useState } from 'react';

function CalcularSerie({ n, setResultado }) {
  useEffect(() => {
    if (n) {
      fetch(`http://localhost:8080/serie?n=${n}`)
        .then(response => response.json())
        .then(data => setResultado(data))
        .catch(error => console.error('Error:', error));
    }
  }, [n, setResultado]);

  return null;
}

export default CalcularSerie;
