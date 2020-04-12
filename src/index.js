import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'redux-logger';


const feedback = {
    feeling: '',
}

const feedbackReducer = (state  = feedback, action)=>{
    if(action.type === 'ADD_FEELING'){
        return state ={
          ...state, feeling: action.payload
        };
    }
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
