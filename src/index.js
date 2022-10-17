import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/reset.css" 
import "./css/App.css" 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='containbox'>
        <App />
    </div>
);
