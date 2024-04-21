import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-pdtq43suvp6enwgg.us.auth0.com"
    clientId="7iunkKTDd51c0ptFcQgjtQwE7q4eaPVy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
