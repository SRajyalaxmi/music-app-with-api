import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import SongContextProvider from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SongContextProvider>
       <App/>
      </SongContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

