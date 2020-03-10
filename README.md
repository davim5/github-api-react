This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


# Passo a passo

## Criando

1. yarn create react-app "name"

2. Tirar comentários do index.html

3. Tirar link de manifest

4. Deletar arquivos
  * App.css
  * App.test..
  * logo.svg
  * serviceWorker

5. No App.js
  * Deixar só "h1"

## Configurando Eslint, Editor Config e Prettier

1. Generate editor config
  * end_of_line = lf
  * trim_trailing_whitespace = true
  * insert_final_newline = true

2. yarn add eslint -D
 * deletar package-lock-json
 * rodar um yarn

3. yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

4. abrir .eslintrc.js
 - extends:[
   'react'
   'prettier/react'
 ]
 - parser: 'babel-eslint'
 - plugins: [
   'react',
   'prettier',
 ]
 - rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] }
    ],
    'import/prefer-default-export': 'off'
  },

5. Criar .prettierrc
 * {
   "singleQuote":true,
   "trailingComma":"es5"
 }

## Roteamento

1. yarn add react-router-dom

2. criar routes.js na pasta src

3. pasta pages

4. pasta Main
  * index.js e style.js

5. pasta Repository
  * index.js e style.js

6. No Main/index.js
  * rfc
  * return h1 Main

7. No routes.js
```
import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/index';
import Repository from './pages/Repository/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
```
8. No App.js
* `` return <Routes/>``

## Styled Components
1. yarn add styled-components

2. Na pasta Main/styles.js
  * import styled from 'styled-components'

```
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 18px;
  color: blue;
  font-family: Arial, Helvetica, sans-serif;
  .
  .
  .
`;
```
## Estilos Globais
1. No src
 * Criar pasta styles
 * Criar global.js

2. No global.js
  ```
  import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;;
    box-sizing: border-box;
  }

  html,body,#root{
    min-height: 100%;
  }

  body{
    background: #ccc;
    -webkit-font-smoothing: antialiased;
  }
`;
  ```

3. No App.js
 * `` import GlobalStyle from 'styled-components ``

 ```
    <>
      <Routes />
      <GlobalStyle />
    </>
 ```
## React Icons

1. yarn add react-icons
* pacote com as fontes mais famosas.

## Criando componentes

### Como decidir se criar componente estilizado ou componente html normal?

#### 1. Se o componente for ter mais de 2 nívels de encadeamento, eu crio um novo componente estilizado.

* Exemplo:
```
<Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          ...
        </Form>
</Container>
```
* O componente ``<Form>`` poderia ser uma tag ``<form>`` comum, mas por chegar no segundo nível de encadeamento no componente ``<Container>`` (Container.h1.form), eu crio um novo componente para ficar mais organizado.

#### 2. Toda vez que precisar estilizar o componente baseado em alguma propriedade.

* Exemplo:
 ```
 <SubmitButton disabled>

 </SubmitButton>

 ```
   * Teoricamente, não precisaria ser feito um componente por estar no primeiro nível de encadeamento, mas como será estilizado baseado na propriedade "disabled", cria-se um component.

   #### 3. Passando propriedade pelo CSS.

* Exemplo:
 ```
 export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
 .
 .
 .
`;

 ```
   * Se não quiser informaro "type" do botão por dentro, pode-se passar o "type" de 'submit' por dentro do estilo.


## Componente de Classe

* Para o compente ter um state, tem que ser um componente de classe.

1. Na classe
  * `import React, { Component } from react;`
  ```
  export default class Main extends Component{
    render(){
      return(
        <Container>
        .
        .
        .
      )
    }
  }
  ```

  * Class component precisa de um 'State'

  ## State


1. Na classe

  ```
  export default class Main extends Component{
    state ={
      newRepo: '',
    }
    render(){
     .
     .
     .
    }
  }
  ```
2. No Render

```
  const {newRepo} = this.state;
```

3. No input
```
        <Form onSubmit={() => {}}>
          <input type="text" placeholder="Repository Name"
          value={newRepo}
           />
          <SubmitButton>
            <FaPlus />
          </SubmitButton>
        </Form>

```

  * O 'State' tem que estar estar sendo utilizado pela classe.

  ## Criando Métodos do Form

  1. No input
  ```
        <Form onSubmit={() => {}}>
          <input type="text" placeholder="Repository Name"
          value={newRepo}
          onChange={this.handleInputChange}
           />
          <SubmitButton>
            <FaPlus />
          </SubmitButton>
        </Form>

  ```

  2. Na classe
   * Método
   ```
   export default class Main extends Component{
    state ={
      newRepo: '',
    }
    // Recebe o evento
    handleInputChange = e => {
      // Armazena valor do input na variavel 'newRepo'
      this.setState({newRepo: e.target.value});
    }
    .
    .
    .
  }
   ```
  ## Consumir API do Github

   1. Instalar Axios

   * Biblioteca auxiliar para consumir Api externa

   * `yarn add axios`

   2. No src
   * Criar pasta services
   * Criar api.js

   3. No api.js

   ```
    import axios from 'axios';

    const api = axios.create({
      // URL padronizada para todas as chamadas API
      baseURL: 'https://api.github.com'
    });

    export default api;

   ```
  4. Na Classe Main

    `import api from ../../services/api`

  ## State para ser preenchida como vetor

  * Ele não altera o vetor em si, mas inicializa um novo com tudo que já tinha dentro
  e adiciona o elemento novo.

  1. No State
  ```
    state = {
      newRepo: '',
      repositories: [],
    };
  ```
  * Inicia vazio

  2. No Método
  ```
    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
    });
  ```

  ## Adicionar propriedade de loading

    * Será um propriedade que
   1. No State
  ```
    state = {
      newRepo: '',
      repositories: [],
      loading: false,
    };
  ```
  2. No Início do Método
  ```
      this.setState({ loading:true });
  ```

  3. No Fim do Método
  ```
      this.setState({ loading:false });
  ```
  * Passar propriedade loading, assim o styledComponents consegue ter acesso a essa.
  propriedade para fazer qualquer alteração
  4. No Botão
  ```
      this.setState({ loading:false });
  ```

  ### Configurar style para quando uma propriedade for 'true'.

  * A estilização de css colocada, só será aplicada quando o botão estiver com a propriedade 'disabled' como 'true'.

  ```
  export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #ffffff;
  border: 0;
  .
  .
  .
  &[disabled]{
    cursor:not-allowed;
    opacity:0.6;
  }
`;
  ```

  ### Acessar propriedades do elemento no Style.

  * Setar propriedade 'disabled' baseado na propriedade 'loading'.
  ```
  export const SubmitButton = styled.button.attrs(props =>({
  type: 'submit',
  disabled: props.loading,
}))`

`;
  ```

  ## Adicionar sinal de carregamento

  * Importar icone da bolinha que gira

  * Fazer animação da bolinha no styled-components

  * Conditional rendering: verificar a propriedade

  * Condição dentro do JSX baseado em um valor do state

  * Baseado na informação que se encontra no state, mostra uma informação ou outra.

  ## Colocar efeito girando

  * Importar duas propriedades do 'styled-components'


  1. No styles.js
  `import styled, { keyframes, css} from 'styled-components`

  * Criar animação

    * Keyframes -> Para azer animações
  ```
  const rotate = keyframes`
    from{
      transform: rotate(0deg);
    }

    to{
      transform: rotate(360deg);
    }
  `;

  ```

  2. No Componente

  * css: Para adicionar um conjunto de css à um elemento baseado em uma propriedade que vem de fora dele.

  * O que vier depois do '&&' só será aplicado se a propriedade loading for 'true'.



  ```
  ${props => props.loading &&
  css`
    svg{
      animation: ${rotate} 2s linear infinite;
    }
  `}
  ```










