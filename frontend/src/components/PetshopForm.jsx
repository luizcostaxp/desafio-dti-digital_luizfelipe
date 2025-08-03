import { useState } from 'react';

export default function PetshopForm({ onResultado }) {
  const [data, setData] = useState('');
  const [pequenos, setPequenos] = useState(0);
  const [grandes, setGrandes] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resposta = await fetch('http://localhost:3001/melhor-petshop', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data, pequenos: Number(pequenos), grandes: Number(grandes) }),
    });

    const resultado = await resposta.json();
    onResultado(resultado);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="subtitulo">Insira os dados e encontre o melhor petshop para os seus pets!</h2>
      <div className="campo-data">
        <label className="data">Escolha a data</label>
        <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
      </div>
      <div>
        <label className="caes-pequenos">Número de cães pequenos</label>
        <input type="number" value={pequenos} onChange={(e) => setPequenos(e.target.value)} min="0" />
      </div>
      <div>
        <label className="caes-grandes">Número de cães grandes</label>
        <input type="number" value={grandes} onChange={(e) => setGrandes(e.target.value)} min="0" />
      </div>
      <div className="botao-container">
        <button type="submit">🐕 Buscar petshop 🐕</button>
      </div>
    </form>
  );
}
