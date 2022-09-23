import React, { Component } from 'react';
import api from './api';

/* 1. Criaremos uma classe para nossa aplicação e
damos o extends em Component. Observe que agora
é adicionado no import. */
class App extends Component {

  // 3. Criamos um state para armazenar os filmes
  state = {
    filmes: [],
  }

  /* 4. Vamos adicionar um componente para buscar
  os dados na API. */
  async componentDidMount() {
    /* 5. Veja que a constante response utiliza o await
    porque usamos async. */
    const response = await api.get('');

    /* Colocamos o console log para poder inspecionar
    os elementos para debug, mas não é utilizado na 
    aplicação*/
    //console.log(response.data);

    // 6. jovar os valores recebidos para filmes
    this.setState({ filmes: response.data });
  }

  // 2. Criamos nosso render
  render() {
    /* 7. Vamos buscar os dados de this.state e jogar para
    a posição filmes*/
    const { filmes } = this.state;

    return (
      <div>
        
        { console.log(filmes)}

        {/* 8. Como temos uma array, então vamos usar um maps
        para percorrê-la. Vejaj que temos que ver no resultado
        da API os atributos que vamos mostrar, como name e url.*/}
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope='col'><h1>Filme</h1></th>
                    <th scope='col'><h1>Link</h1></th>
                </tr>
            </thead>
        
        
        {filmes.map(filme => (
            
            <tbody>
                
                    <tr scope= 'row'>
                    
                        <td scope='col'>
                        <h2>
                            {filme.show.name}
                        </h2>
                        </td>
                        <td scope='col'>
                            
                        <p><a href={filme.show.url} target="_blank">
                        {filme.show.url}</a></p>
                        </td>
                    </tr>
                
                </tbody>
            
        ))}
        </table>
            
      </div>
    );
  }
}

export default App;