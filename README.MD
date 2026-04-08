# 🎮 API de Coleção de Jogos

## 📖 Sobre o Projeto

Esta API foi desenvolvida como projeto prático da disciplina de Desenvolvimento de Sistemas. O tema escolhido é uma **coleção de jogos**, onde é possível cadastrar amigos colecionadores e os jogos que cada um possui na sua coleção pessoal.

A API permite gerenciar dois recursos principais:
- **Amigos** — cadastro de colecionadores
- **Jogos** — itens da coleção, sempre associados a um amigo

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)

---

## 📁 Estrutura do Projeto

```
ProjetoDS/
├── src/
│   ├── controllers/
│   │   ├── GameController.js
│   │   └── FriendController.js
│   ├── models/
│   │   ├── Game.js
│   │   └── Friend.js
│   └── routes/
│       ├── gameRoutes.js
│       └── friendRoutes.js
├── startup/
│   ├── db.js
│   └── router.js
├── index.js
├── package.json
└── README.md
```

---

## ▶️ Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [MongoDB](https://www.mongodb.com/) rodando localmente na porta padrão `27017`

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# 2. Acesse a pasta do projeto
cd ProjetoDS

# 3. Instale as dependências
npm install

# 4. Inicie o servidor
npm start
```

O servidor estará disponível em: `http://localhost:3000`
