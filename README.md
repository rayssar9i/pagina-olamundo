# 🌸 Página Olá mundo

Este é um projeto React simples que exibe corações animados por toda a página.

🔗 **Acesse o site aqui**:  
[https://rayssar9i.github.io/pagina-olamundo](https://rayssar9i.github.io/pagina-olamundo)

## 💻 Como rodar localmente

Se quiser rodar o projeto no seu computador:

```bash
git clone https://github.com/rayssar9i/pagina-olamundo.git
cd pagina-olamundo
npm install
npm start


✅ Como foi feito

- O projeto foi iniciado com `Create React App`:
  ```bash
  npx create-react-app pagina-olamundo
  cd pagina-olamundo

Depois, foi criado um repositório no GitHub e conectado localmente:
  git init
  git remote add origin https://github.com/rayssar9i/pagina-olamundo.git
  git add .
  git commit -m "primeiro commit"
  git push -u origin main

Instalado o pacote gh-pages:
bash
Copiar código
npm install gh-pages --save-dev

Adicionado ao package.json:

json
Copiar código
"homepage": "https://rayssar9i.github.io/pagina-olamundo/",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
bash : npm run deploy

✨ Funcionalidade da Página
A cor de fundo foi definida no App.css:

css
Copiar código
body {
  background-color: rgb(130, 168, 202);
}

.heart {
  position: fixed;
  top: -20px;
  font-size: 20px;
  animation: float 3s linear forwards;
  z-index: 9999;
  pointer-events: none;
}

E o conteúdo da página ficou assim:

jsx
Copiar código
return (
  <div className="App">
    <h1>olá mundo</h1>
    <h2>Bem-vinda, Rayssa 💕</h2>
  </div>
);
