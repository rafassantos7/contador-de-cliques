import { useState } from 'react'

export default function Contador() { 
  const [contador, setContador] = useState(0);

  function handleIncrement() { 
    setContador(contador + 1);
  }
  return (
    <>
      <h2>O numero atual é {contador}</h2>
      <button onClick={handleIncrement}>Incrementar numero atual</button>
    </>
  )
}