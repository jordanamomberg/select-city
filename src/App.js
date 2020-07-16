import React from 'react';
import './App.css';

function App() {
  const cidades = ['São Paulo', 'Buenos Aires'];

  return (
    <div className="App">
      {cidades.map(cidade => (
        <div>
          {cidade}
        </div>
      ))}
    </div>
  );
}

export default App;
