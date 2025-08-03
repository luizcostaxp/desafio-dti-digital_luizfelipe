const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 3001;

app.post('/melhor-petshop', (req, res) => {
  const { data, pequenos, grandes } = req.body;

  if (!data || pequenos == null || grandes == null) {
    return res.status(400).json({ erro: 'Dados incompletos' });
  }

  const dia = new Date(data).getDay(); // 0 = domingo, 6 = sábado
  const finalDeSemana = dia === 0 || dia === 6;

  const petshops = [
    {
      nome: 'Meu Canino Feliz',
      distanciaKm: 2.0,
      preco: finalDeSemana
        ? { pequeno: 24.0, grande: 48.0 } // 20% a mais
        : { pequeno: 20.0, grande: 40.0 },
    },
    {
      nome: 'Vai Rex',
      distanciaKm: 1.7,
      preco: finalDeSemana
        ? { pequeno: 20.0, grande: 55.0 }
        : { pequeno: 15.0, grande: 50.0 },
    },
    {
      nome: 'ChowChawgas',
      distanciaKm: 0.8,
      preco: { pequeno: 30.0, grande: 45.0 }, // mesmo preço todos os dias
    },
  ];

  const resultados = petshops.map((petshop) => {
    const total =
      petshop.preco.pequeno * pequenos + petshop.preco.grande * grandes;
    return {
      nome: petshop.nome,
      precoTotal: total,
      distanciaKm: petshop.distanciaKm,
    };
  });

  // Ordenar pelo menor preço, depois pela menor distância
  resultados.sort((a, b) => {
    if (a.precoTotal !== b.precoTotal) {
      return a.precoTotal - b.precoTotal;
    }
    return a.distanciaKm - b.distanciaKm;
  });

  res.json({
    melhorPetshop: resultados[0].nome,
    precoTotal: resultados[0].precoTotal,
    distanciaKm: resultados[0].distanciaKm,
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
