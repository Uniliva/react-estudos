import React, { Component } from 'react';
import * as firebase from 'firebase'

class Dash extends Component {
  //usado pra inicializar o sobjetos
  constructor(){
    console.log('construtor')
    super() //para usar o this a seguir é necessario acionar o super
    this.state = { autores:{} } //adicionando ao status a lista de objetos
    
  }
  componentWillMount(){
    console.log('componentWillMount')
    firebase.database().ref('/livraria/autores').once('value').then(function(snapshot) {
     this.setState({autores:snapshot.val()})     
    }.bind(this)
  )
  }

  //responsavel por renderizar os item na tela, deve ser chamado toda vez que ouver uma alteração no status
  render() {    
    console.log('render')
    return (
      <div id="main">
        <div className="header">
          <h1>Cadastro de Autores</h1>
        </div>
        <br/>
        <div className="content" id="content">
          <div className="pure-form pure-form-aligned">
            <form className="pure-form pure-form-aligned">
              <div className="pure-control-group">
                <label htmlFor="nome">Nome</label>
                <input id="nome" type="text" name="nome" value="" />
              </div>
              <div className="pure-control-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" value="" />
              </div>
              <div className="pure-control-group">
                <label htmlFor="senha">Senha</label>
                <input id="senha" type="password" name="senha" />
              </div>
              <div className="pure-control-group">
                <label></label>
                <button type="submit" className="pure-button pure-button-primary">Gravar</button>
              </div>
            </form>

          </div>
          <div>
        <br/>
        <hr/>
            <table className="pure-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>                
                {
                 //para inserir codigo dinâmico no html use as chaves {} do JSX              
                 this.state['autores'].map(autor => (
                    <tr>                  
                    <td>{autor.nome}</td>
                    <td>{autor.email}</td>
                  </tr>
                    )
                )             
                }
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );

  }
}

export default Dash;
