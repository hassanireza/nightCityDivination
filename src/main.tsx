import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/styles/base.css';
import '@/styles/enhancements.css';
import '@/styles/mobile.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found. The app cannot mount.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
