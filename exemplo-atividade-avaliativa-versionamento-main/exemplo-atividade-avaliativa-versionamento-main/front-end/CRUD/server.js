const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
// ROTA: listar dados
if (req.url === '/dados' && req.method === 'GET') {

fs.readFile('dados.json', (err, data) => {
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(data);
});
}
// ROTA: salvar dados
else if (req.url === '/dados' && req.method === 'POST') {
let body = '';
req.on('data', chunk => {
body += chunk.toString();// converte o buffer para string
});
req.on('end', () => {
const novoDado = JSON.parse(body);
fs.readFile('dados.json', (err, data) => {
const dados = JSON.parse(data);// converte o conteúdo do arquivo para um array de objetos
dados.push(novoDado);// adiciona o novo dado ao array
fs.writeFile('dados.json', JSON.stringify(dados, null, 2), () => {
res.writeHead(201);
res.end('Dado salvo com sucesso');
});
});
});
}
// EDITAR DADO
else if (req.url === '/dados' && req.method === 'PUT') {
let body = '';
req.on('data', chunk => {
body += chunk.toString();
});

req.on('end', () => {
const { index, nome } = JSON.parse(body);
fs.readFile('dados.json', (err, data) => {
const dados = JSON.parse(data);
if (dados[index]) {
dados[index].nome = nome;
}
fs.writeFile('dados.json', JSON.stringify(dados, null, 2), () => {
res.writeHead(200);
res.end('Atualizado com sucesso');
});
});
});
}
// DELETAR DADO
else if (req.url === '/dados' && req.method === 'DELETE') {
let body = '';
req.on('data', chunk => {
body += chunk.toString();
});
req.on('end', () => {
const { index } = JSON.parse(body);
fs.readFile('dados.json', (err, data) => {
const dados = JSON.parse(data);
if (dados[index]) {
dados.splice(index, 1); // remove o item
}
fs.writeFile('dados.json', JSON.stringify(dados, null, 2), () => {
res.writeHead(200);
res.end('Deletado com sucesso');
});
});
});

}
// ROTAS HTML
else if (req.url === '/') {
fs.readFile('index2.html', (err, content) => {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(content);
});
}
else if (req.url === '/sobre') {
fs.readFile('sobre.html', (err, content) => {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(content);
});
}
else {
res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
res.end('Página não encontrada');
}
});
server.listen(3000, () => {
console.log('Servidor rodando em http://localhost:3000');
});