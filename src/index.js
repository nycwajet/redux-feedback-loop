import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'redux-logger';
import Feedback from './components/FeedBack/Feedback';


feedbackReducer = (state  = feedback, action)=>{
    if(action.type === 'ADD_FEELING'){
        return state ={
          ...state, feeling:action.payload
        };
    }
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    })
    
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
