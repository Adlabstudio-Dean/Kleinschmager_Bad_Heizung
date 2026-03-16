import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { applyTheme } from './theme.ts';
import './index.css';

// @ts-ignore
const config = __TENANT_CONFIG__;

if (config) {
  document.title = config.name + " | Sanitär & Heizung";
  applyTheme(config.primaryColor, config.secondaryColor);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App config={config} />
    </BrowserRouter>
  </StrictMode>,
);

