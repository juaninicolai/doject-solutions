# DoJect Solutions

Este repositorio contiene el código fuente del proyecto DoJect Solutions.

## Instrucciones de Configuración

Sigue estos pasos para configurar el proyecto en tu entorno de desarrollo:

### 1. Estructura de Carpetas

Asegúrate de tener la siguiente estructura de carpetas:

/Doject-Solutions
    /css
        styles.css
    /output
        styles.css
    /node_modules
    tailwind.config.js
    postcss.config.js
    index.html


### 2. Instalación de Dependencias

Dependencias necesarias:
    Instalación de Tailwind CSS:

        npm install tailwindcss -D

    Instalación de PostCSS y sus Plugins:

        npm install postcss postcss-cli autoprefixer -D


### 3. Inicialización de Configuración de Tailwind

Generar el archivo tailwind.config.js

        npx tailwindcss init

### 4. Configuración de PostCSS

Crea el archivo de configuración para PostCSS llamado postcss.config.js en la raíz de tu proyecto:

// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};

### 5. Compilación de Estilos

        npx postcss css/styles.css -o output/styles.css

### 6. Ruta del Enlace en HTML

<link rel="stylesheet" href="/output/styles.css">

### 7. Servidor Web Local

        npm install -g live-server

        npx live-server

