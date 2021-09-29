import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'normalize.css'
import { GlobalStyles } from './global-styles'
import { FirebaseContextProvider } from './context/firebase'
import { AuthContextProvider } from './context/auth'

ReactDOM.render(
    <>
      <FirebaseContextProvider>
        <AuthContextProvider>
          <GlobalStyles />
          <App />
        </AuthContextProvider>
      </FirebaseContextProvider>
    </>,
  document.getElementById('root')
);

