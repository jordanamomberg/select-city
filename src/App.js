import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
 

function App() {
  const [cidades, setCidades ] = useState(['São Paulo', 'Buenos Aires']);


  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
      setCidades(response.data);
    })
  }, [cidades]);

  return (
    <div className="App">
      <select name="cidades">
        {cidades.map((cidade, index) => 
        <option
          id={cidade.sigla}
          key={index}
        >{cidade.nome}</option>
      )}
      </select>

    </div>
  );

}

export default App;
