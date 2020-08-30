import React, { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');

  const Combo = () => {
    const opt = ['Fulano 1', 'Fulano 2', 'Fulano 3', 'Fulano 4'];
    const cbOpt = opt.map((el) => <option>{el}</option>);
    return <select>{cbOpt}</select>;
  };

  return (
    <div>
      <input
        type="text"
        value={nome}
        onChange={(text) => setNome(text.target.value)}
      />
      <p>Hello {nome}</p>
      <Combo />
    </div>
  );
}

export default App;
