import React from 'react';
import './css/web.css';
import 'bulma/css/bulma.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/index';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './store/modules/authContext';

import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
    faHomeAlt,
    faArrowRightFromBracket,
    faIdCard
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = true
library.add(faHomeAlt,
    faArrowRightFromBracket,
    faIdCard)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AuthContextProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </AuthContextProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
