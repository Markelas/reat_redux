import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk"; //Для асинхронных операций, так как redux сам по себе синхронный
import { createStore, compose, applyMiddleware } from "redux";
//compose позволяет объединить middleware и reactDevTools
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux"; //Свяжет реакт и редакс
import {spamFilter} from "./redux/middleware";
import './index.css';
import App from './App';

const store = createStore(rootReducer, compose(
        applyMiddleware(
            thunk, //Для создания асинхронных операций
            spamFilter
        ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
) //Для использования React Dev Tools) //Передаем store в provider обёртку

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
