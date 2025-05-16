// eslint.config.mjs
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Reglas base de Next y TypeScript
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Prettier plugin para mostrar errores si el código no sigue las reglas
  {
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // Desactiva reglas que pueden chocar con Prettier
  ...compat.extends('prettier'),
];
