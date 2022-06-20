import React from 'react';
 import './index.css';
import {App} from './App';
import { createRoot } from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const container = document.getElementById('root');
const root = createRoot(container);
root.render(

<App/>

);
 