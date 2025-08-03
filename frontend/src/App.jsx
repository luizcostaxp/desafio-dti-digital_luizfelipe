import { useState } from 'react';
import PetshopForm from './components/PetshopForm';
import './App.css';


function App() {
  const [resultado, setResultado] = useState(null);

  return (
    <div className="pagina">
      <h1 className="titulo"> Melhor Petshop  <span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>🐾</span></h1>
      <PetshopForm onResultado={setResultado} />
      {resultado && (
        
        <div  className="resultado" style={{ marginTop: '0px' }}>
              {resultado ? (
                  <>
                    <h2>Melhor opção para você:</h2>
                    <p><strong>🐶</strong> {resultado.melhorPetshop}</p>
                    <p><strong>💰 Preço:</strong> R$ {resultado.precoTotal.toFixed(2)}</p>
                    <p><strong>📍 Distância:</strong> {resultado.distanciaKm} km</p>
                  </>
              ) : null}
        </div>
      )}
    </div>
  );
}

export default App;
