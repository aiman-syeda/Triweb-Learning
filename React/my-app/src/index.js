import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ContextFavorite } from './components/store/ContextFavourite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextFavorite>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ContextFavorite>
);


