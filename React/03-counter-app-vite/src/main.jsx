import React from 'react';
import ReactDOM from 'react-dom/client';

/*
import { HelloWorldAPP } from './HelloWorldApp';
import { FirstApp } from './FirstApp'; 
*/

import { CounterApp } from './CounterApp';
import './style.css'

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp Value= { 123 } />
    </React.StrictMode>
)