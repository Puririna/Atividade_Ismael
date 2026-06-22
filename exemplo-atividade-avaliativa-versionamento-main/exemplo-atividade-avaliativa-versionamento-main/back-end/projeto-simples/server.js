const http = require('http');
const fs = require('fs');
const path = require('path');
// Criar servidor
const server = http.createServer((req, res) => {
// Se acessar a página principal
if (req.url === '/') {
// Caminho do HTML
const filePath = path.join(__dirname, 'index.html');
// Ler arquivo HTML
fs.readFile(filePath, (err, content) => {
if (err) {
res.writeHead(500);
res.end('Erro ao carregar o arquivo');
} else {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(content);
}
});
} else {
// Página não encontrada
res.writeHead(404);
res.end('Página não encontrada');
}

});
// Rodar servidor
server.listen(3000, () => {
console.log('Servidor rodando em http://localhost:3000');
});