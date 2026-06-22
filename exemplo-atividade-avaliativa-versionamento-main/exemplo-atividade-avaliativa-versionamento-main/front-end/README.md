📝 Descrição do Projeto/Atividade

Desenvolvimento de uma interface web interativa para cadastro de nomes, permitindo adicionar, listar, pesquisar, editar e excluir registros. A aplicação possui uma interface estilizada com CSS moderno e se comunica com um servidor Node.js para persistir os dados em um arquivo JSON.


---

🧠 Reflexão de Aprendizado

1. O que aprendi?

Aprendi a estruturar páginas utilizando HTML5, aplicar estilos modernos com CSS3 utilizando Flexbox, efeitos visuais e responsividade básica. Também aprendi a manipular elementos da página com JavaScript, utilizar o DOM, criar funções para adicionar, editar, excluir e pesquisar dados, além de consumir rotas da API através do método fetch utilizando requisições HTTP como GET, POST, PUT e DELETE. Compreendi ainda a importância da separação entre front-end e back-end para a organização de aplicações web.

2. Para que serve (Por que aprendi)?

O desenvolvimento front-end é responsável pela interface com a qual o usuário interage. Criar páginas bonitas, intuitivas, acessíveis e responsivas melhora a experiência do usuário, facilita a navegação e torna a aplicação mais agradável de utilizar. Um bom front-end contribui para a qualidade do produto final, aumentando sua usabilidade, organização e eficiência.


---

🛠️ Tecnologias e Ferramentas Utilizadas

HTML5

CSS3

JavaScript (ES6+)

Node.js

API Fetch

VS Code

Arquivo JSON para armazenamento de dados



---

💻 Demonstração e Como Rodar

Código Relevante Comentado

// Função para salvar um nome
function salvar() {
    const input = document.getElementById('nome');
    const nome = input.value;

    fetch('/dados', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome })
    })
    .then(() => {
        input.value = ''; // Limpa o campo após salvar
        carregarDados(); // Atualiza a lista
    });
}

// Função para carregar os dados salvos
function carregarDados() {
    fetch('/dados')
        .then(res => res.json())
        .then(dados => {
            dadosGlobais = dados;
            renderizar(dados);
        });
}

Explicação:

fetch('/dados') realiza uma requisição ao servidor.

POST envia novos dados para serem armazenados.

GET busca os dados já cadastrados.

JSON.stringify() converte o objeto JavaScript em JSON.

carregarDados() atualiza a lista automaticamente após alterações.

renderizar() exibe os dados dinamicamente na página utilizando manipulação do DOM.


Instruções para Executar

1. Instale as dependências do projeto:



npm install

2. Execute o servidor:



node server.js

3. Abra o navegador e acesse:



http://localhost:3000

4. Utilize a interface para cadastrar nomes, pesquisar registros, editar informações e excluir itens da lista. Os dados serão armazenados no arquivo dados.json.
