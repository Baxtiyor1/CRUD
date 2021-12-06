import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { TokenProvider } from './Context/token'
import { PostIdProvider } from './Context/postId'

ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter>
    <TokenProvider>
      <PostIdProvider>
          <App />
      </PostIdProvider>
    </TokenProvider>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
