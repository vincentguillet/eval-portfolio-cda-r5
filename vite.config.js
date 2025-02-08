import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Pour GitHub Pages : chemins relatifs nécessaires
  build: {
    outDir: 'docs', // Répertoire où les fichiers de build seront générés
  },
});

