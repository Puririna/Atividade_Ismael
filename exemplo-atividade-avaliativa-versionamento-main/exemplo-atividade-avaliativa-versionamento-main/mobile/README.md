📝 Descrição do Projeto/Atividade

Desenvolvimento de um aplicativo simples em React Native que realiza a soma automática de dois números pré-definidos. A aplicação permite ao usuário executar a operação matemática por meio de um botão e limpar o resultado utilizando outro botão. O projeto foi utilizado para praticar conceitos básicos de desenvolvimento mobile, gerenciamento de estados e estilização de interfaces.


---

🧠 Reflexão de Aprendizado

1. O que aprendi?

Aprendi a desenvolver interfaces móveis utilizando React Native, criando componentes como View, Text e TouchableOpacity. Também utilizei o Hook useState para armazenar e atualizar o estado da aplicação em tempo real. Compreendi como criar funções para manipular dados, associar eventos aos botões por meio do onPress e estilizar os componentes utilizando StyleSheet. Além disso, pratiquei conceitos fundamentais de renderização dinâmica e atualização automática da interface quando ocorre uma alteração no estado.

2. Para que serve (Por que aprendi)?

O desenvolvimento mobile é importante porque grande parte dos usuários acessa serviços por meio de smartphones. Aprender React Native permite criar aplicativos para Android e iOS utilizando uma única base de código, reduzindo tempo e custos de desenvolvimento. Essa competência é bastante valorizada no mercado de trabalho, pois possibilita desenvolver aplicações modernas, interativas e eficientes para atender às necessidades de empresas e usuários.


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

import React, { useState } from 'react';

export default function App() {

  // Estado responsável por armazenar o resultado
  const [resultado, setResultado] = useState(0);

  // Realiza a soma dos números
  const realizarSoma = () => {
    const n1 = 10;
    const n2 = 5;

    const somaTotal = n1 + n2;

    // Atualiza o estado e a interface automaticamente
    setResultado(somaTotal);
  };

  // Limpa o resultado
  const resetarSoma = () => {
    setResultado(0);
  };

}

Explicação:

useState(0) cria uma variável de estado iniciando com valor zero.

setResultado() atualiza o valor armazenado no estado.

realizarSoma() calcula a soma dos números 10 e 5.

resetarSoma() retorna o resultado para zero.

TouchableOpacity permite criar botões interativos.

StyleSheet.create() organiza os estilos da aplicação.


Instruções para Executar

1. Instale as dependências do projeto:



npm install

2. Inicie o servidor do Expo:



npx expo start

3. Abra o aplicativo Expo Go no celular ou utilize um emulador Android/iOS.


4. Escaneie o QR Code exibido no terminal ou no navegador para visualizar o aplicativo em execução.
