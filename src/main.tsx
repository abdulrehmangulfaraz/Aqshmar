import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ModalProvider } from './context/ModalContext'; // ✅ Import your provider

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModalProvider> {/* ✅ Wrap App inside provider */}
      <App />
    </ModalProvider>
  </React.StrictMode>
);
