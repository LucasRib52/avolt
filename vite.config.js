import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Isso permite que ele use 0.0.0.0 para compartilhar
    port: 3000, // Porta que você deseja usar
  },
});