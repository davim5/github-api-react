import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    /* Remover margin, padding e outline colocados por padrão no css */
    margin: 0;
    padding: 0;
    outline: 0;
    /* Faz com que a margin, o padding e qualquer espaçamento que seja
    adicionado no elemento seja sempre somado com a largura do elemento. */
    box-sizing: border-box;
    /* Exemplo: Se elemento tiver 280px de largura fixa e for
    adicionado 10px de padding, ele não vai ocupar 300px.
    Continua ocupando 280px, sendo 260px de largura e 10 de padding. */
  }

  html,body,#root{
    /* Faz com que página ocupe sempre 100% da altura por padrão. */
    min-height: 100%;
  }

  body{
    background: #cccccc;
    /* Deixa as fontes mais definidas. */
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button{
    color: #222;
    font-size:14px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
