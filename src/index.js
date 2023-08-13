import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import { ChakraProvider, theme } from '@chakra-ui/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={Store}>

      <ChakraProvider theme={theme}>
        <App />

      </ChakraProvider>
    </Provider>

  </React.StrictMode >
);
