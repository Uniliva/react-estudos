import React, { Component } from 'react';
class Menu extends Component {
  render() {
    return (
      <div>
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>

        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="#">U-Contas</a>

            <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contas</a></li>      
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Graficos</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Relatorios</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sair</a></li>
              <li className="pure-menu-item menu-item-divided pure-menu-selected">
                <a href="#" className="pure-menu-link">outro</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
