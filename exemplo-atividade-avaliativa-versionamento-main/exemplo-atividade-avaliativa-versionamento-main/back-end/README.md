# ⚙️ Desenvolvimento Back-end

## 📝 Descrição do Projeto/Atividade
Desenvolvimento de um servidor simples utilizando Node.js. O servidor responde às requisições HTTP, disponibiliza uma página HTML e permite a interação do usuário por meio de um botão que executa uma função JavaScript exibindo uma mensagem na tela.

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
Aprendi os conceitos básicos de desenvolvimento back-end utilizando Node.js, como criar um servidor HTTP, definir respostas para as requisições dos usuários e configurar uma porta para execução do servidor. Também compreendi a diferença entre front-end e back-end, o funcionamento das requisições e respostas HTTP e como integrar uma página HTML ao servidor. Além disso, utilizei o VS Code, o terminal do Node.js e o arquivo package.json para organizar o projeto.

### 2. Para que serve (Por que aprendi)?
A lógica de servidor é responsável por processar informações, aplicar regras de negócio e enviar respostas aos usuários. As APIs e servidores permitem a comunicação entre aplicações, sites e bancos de dados. O desenvolvedor precisa garantir a integridade das informações e a segurança dos dados para evitar erros, perdas de informações e acessos indevidos.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
Node.js
JavaScript
HTML
VS Code
Terminal PowerShell
Package.json

---

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
Código Relevante Comentado

// Cria um servidor HTTP
const server = http.createServer((req, res) => {

    // Caso a rota não exista
    res.writeHead(404);
    res.end('Página não encontrada');

});

// Inicia o servidor na porta 3000
server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
```

### Instruções para Executar
1. Instale as dependências na pasta do projeto:
   ```bash
   npm install
   ```
2. Configure as variáveis de ambiente necessárias em um arquivo `.env` (se aplicável).
3. Execute o script de inicialização do servidor:
   ```bash
   npm start
   # ou para modo de desenvolvimento:
   npm run dev
   ```
4. Teste as rotas utilizando uma ferramenta de requisições HTTP (como Postman, Insomnia ou a extensão Thunder Client do VS Code).

Instruções para Executar

1. Abra o terminal na pasta do projeto.
2. Instale as dependências (caso existam):
npm install
3. Execute o servidor:
node server.js
4. Abra o navegador e acesse:
http://localhost:3000
5. A página exibirá uma mensagem de servidor funcionando e um botão que, ao ser clicado, mostrará um alerta com o texto "Funcionou!".
