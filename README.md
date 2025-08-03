# Melhor Petshop - Desafio dti digital

## Descrição do Projeto

Este projeto tem como objetivo encontrar o melhor petshop para banho de cães pequenos e grandes, considerando preço e distância do canil do Senhor Eduardo, em Belo Horizonte. A solução é composta por um frontend em React e um backend em Node.js com Express.

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js
- npm ou yarn

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/luizcostaxp/desafio-dti-digital_luizfelipe
   ```
   Em seguida, acesse o diretório onde o projeto foi baixado.

2. Backend (API):

   ```bash
   cd backend
   npm install
   node index.js
   ```
O servidor rodará em http://localhost:3001.

3. Frontend (React):

Em outro terminal:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```
O app estará disponível em http://localhost:5173.

### Premissas Assumidas

Considerei domingo (0) e sábado (6) como final de semana para cálculo de preços diferenciados.
Quantidades de cães pequenos e grandes são números inteiros maiores ou iguais a zero.
O backend calcula preço total com base no número de cães e preço unitário por petshop/dia.
Data enviada no formato mm/dd/yyyy pelo frontend.
O sistema roda localmente com CORS liberado para facilitar comunicação entre front e back.


### Decisões de projeto

O sistema tem frontend e backend separados. O backend, feito com Node.js e Express, cuida dos cálculos pra escolher o melhor petshop com base nos dados enviados. O frontend, em React, só exibe a interface e manda os dados pro backend.

Eles se comunicam via fetch. Como está tudo rodando localmente, precisei liberar o CORS no backend pra evitar erro ao fazer as requisições.

### Outras informações importantes

Testes unitários não foram implementados.
Para rodar o backend, será preciso o Node.js versão 16 ou superior.

### Prévia do resultado
<img width="1360" height="644" alt="image" src="https://github.com/user-attachments/assets/c817316f-6330-4686-a8df-a2b187883952" />
<img width="1360" height="644" alt="image" src="https://github.com/user-attachments/assets/5a9d4568-98b9-4ada-986f-513a8fc72aa5" />


