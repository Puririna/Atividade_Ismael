📝 Descrição do Projeto/Atividade

Desenvolvimento de um aplicativo simples utilizando React Native e TypeScript com o ambiente Expo. O projeto teve como objetivo praticar a criação de interfaces móveis, manipulação de estados, eventos de interação e estilização de componentes.


---

🧠 Reflexão de Aprendizado

1. O que aprendi?

Aprendi a desenvolver aplicações móveis utilizando React Native, criando componentes de interface, utilizando o Hook useState para gerenciar estados, tratando eventos de clique e estilizando telas com StyleSheet. Também compreendi a estrutura básica de um projeto Expo e como visualizar a aplicação em dispositivos móveis.

2. Para que serve (Por que aprendi?)

O desenvolvimento mobile é importante porque permite criar aplicativos para smartphones de forma eficiente. O React Native possibilita desenvolver aplicações para Android e iOS utilizando uma única base de código, reduzindo tempo de desenvolvimento e facilitando a manutenção dos projetos.


---

🛠️ Tecnologias e Ferramentas Utilizadas

React Native

TypeScript

Expo

React Hooks (useState)

VS Code



---

💻 Demonstração e Como Rodar

Código Relevante Comentado

const [resultado, setResultado] = useState(0);

// Atualiza o estado com a soma dos valores
const realizarSoma = () => {
  setResultado(10 + 5);
};

// Reinicia o resultado
const resetarSoma = () => {
  setResultado(0);
};

Explicação:

useState() armazena valores que podem mudar durante a execução do aplicativo.

setResultado() atualiza o estado e a interface automaticamente.

As funções são acionadas pelos botões utilizando o evento onPress.


Instruções para Executar

1. Instale as dependências:



npm install

2. Inicie o projeto:



npx expo start

3. Abra o aplicativo Expo Go ou utilize um emulador Android/iOS para visualizar a aplicação.
