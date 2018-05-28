import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import './css/side-menu.css'
import '../node_modules/purecss/build/pure-min.css'
import Menu from './js/menu/Menu';
import Dash from './js/dash/Dash';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<Dash />, document.getElementById('dash'));
registerServiceWorker();
