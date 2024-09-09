/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',  // Incluye todos los archivos HTML en cualquier subcarpeta
    './**/*.js',    // Incluye todos los archivos JavaScript en cualquier subcarpeta
    '!./node_modules/**/*'    // Excluye la carpeta node_modules
  ],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['UnifrakturMaguntia', 'serif'],
      },
      colors: {
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        'gray-black': '#1a1a1a',  // Color personalizado gris oscuro
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
