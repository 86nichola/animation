import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from 'components/App';
import './index.css';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
