import React, { Component } from 'react';

class Dash extends Component {
  render() {
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
                <tr>
                  <td>Alberto</td>
                  <td>alberto.souza@caelum.com.br</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );

  }
}

export default Dash;
