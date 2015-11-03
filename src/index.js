import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'


var store = configureStore({list: [1,5,6]});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
