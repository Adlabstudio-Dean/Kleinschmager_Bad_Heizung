import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  const activeTenant = env.ACTIVE_TENANT || env.VITE_TENANT || 'maurer';
  
  const configPath = path.resolve(__dirname, `tenants/${activeTenant}.json`);
  let tenantConfig = {};
  if (fs.existsSync(configPath)) {
    tenantConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  } else {
    console.warn(`Tenant config ${configPath} not found, using empty object.`);
  }

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      '__TENANT_CONFIG__': JSON.stringify(tenantConfig),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
