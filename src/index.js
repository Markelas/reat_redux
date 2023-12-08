import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux"; //Свяжет реакт и редакс
import './index.css';
import App from './App';

const store = createStore(rootReducer) //Передаем store в provider обёртку

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
