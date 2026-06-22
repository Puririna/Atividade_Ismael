# 🗄️ Banco de Dados

## 📝 Descrição do Projeto/Atividade
Criação de um banco de dados simples para armazenar informações sobre filmes, contendo atributos como título, gênero, ano de lançamento, nota de avaliação e duração. Também foram realizadas consultas SQL para ordenar e exibir os filmes com melhores avaliações.

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
Aprendi a criar tabelas utilizando comandos DDL, definir uma chave primária para identificar cada registro de forma única e inserir dados por meio do comando INSERT. Também utilizei consultas com SELECT, ordenação com ORDER BY e limitação de resultados com LIMIT, permitindo recuperar informações específicas do banco de dados de maneira eficiente.

### 2. Para que serve (Por que aprendi)?
Os bancos de dados são essenciais para armazenar, organizar e consultar informações utilizadas por sistemas e aplicações. Saber projetar tabelas corretamente e realizar consultas eficientes melhora o desempenho do software, facilita a manutenção dos dados e permite que informações sejam encontradas rapidamente, mesmo em grandes volumes de registros.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
MySQL

SQL

DBeaver (ou outro cliente SQL utilizado)

VS Code (opcional)


---

## 💻 Demonstração e Como Rodar


Código/Script SQL Relevante Comentado


-- Criação da tabela de filmes

CREATE TABLE filmes (
 
    id INT PRIMARY KEY,
    titulo VARCHAR(100),
    genero VARCHAR(50),
    ano INT,
    nota DECIMAL(3,1),
    duracao INT
);


-- Inserção dos registros

INSERT INTO filmes VALUES

(1, 'Interestelar', 'Ficção', 2014, 9.5, 169),

(2, 'Batman', 'Ação', 2022, 8.7, 176),

(3, 'Avatar', 'Ficção', 2009, 8.0, 162),

(4, 'Toy Story', 'Animação', 1995, 8.9, 81),

5, 'Vingadores', 'Ação', 2019, 9.2, 181),

(6, 'Shrek', 'Comédia', 2001, 8.5, 90),

(7, 'Titanic', 'Romance', 1997, 9.0, 194),

(8, 'Coringa', 'Drama', 2019, 8.8, 122),

(9, 'Matrix', 'Ficção', 1999, 9.3, 136),

(10, 'Up', 'Animação', 2009, 8.4, 96);


-- Consulta para exibir os 5 filmes com maiores notas

SELECT *

FROM filmes

ORDER BY nota DESC

LIMIT 5;

### Instruções para Executar
1. Abra seu SGBD (MySQL, DBeaver ou similar).
2. Copie e execute o comando CREATE TABLE.
3. Execute o comando INSERT INTO para inserir os dados.
4. Execute a consulta SELECT para visualizar os cinco filmes mais bem avaliados.
5. Verifique os resultados retornados pelo banco de dados.
