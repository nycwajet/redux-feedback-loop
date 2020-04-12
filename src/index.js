import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';


const feedback = {
    feeling: '',
    understanding:'',
    support:'',
};

const feedbackReducer = (state  = feedback, action)=>{
    if(action.type === 'ADD_FEELING'){
        return state ={
          ...state, 
          feeling: action.payload
        };
    }
    else if(action.type === 'ADD_UNDERSTANDING'){
        return state = {
            ...state,
            understanding: action.payload
        };
    }
        else if(action.type === 'ADD_SUPPORT'){
            return state = {
                ...state,
                support: action.payload
            };
    }
    else if(action.type === 'ADD_COMMENTS'){
        return state = {
            ...state,
            comments: action.payload
        };
}
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(
    <Provider store={storeInstance} >
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
