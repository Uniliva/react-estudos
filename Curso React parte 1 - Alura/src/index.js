import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase'
import './css/side-menu.css'
import '../node_modules/purecss/build/pure-min.css'
import Menu from './js/menu/Menu';
import Dash from './js/dash/Dash';
import registerServiceWorker from './registerServiceWorker';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBToOr72lSDDVRu0BI87KpPn2OTBpulhfA",
    authDomain: "react-1-7d183.firebaseapp.com",
    databaseURL: "https://react-1-7d183.firebaseio.com",
    projectId: "react-1-7d183",
    storageBucket: "react-1-7d183.appspot.com",
    messagingSenderId: "968380349502"
};
//inicializa o firebase
firebase.initializeApp(config)


ReactDOM.render( < Menu / > , document.getElementById('menu'));
ReactDOM.render( < Dash / > , document.getElementById('dash'));
registerServiceWorker();