# 🌎 Aplicación de Venta de Viajes con JavaScript

**Demo en línea:** [Ver aplicación funcionando](https://davidfguerrerov.github.io/base-practica-proyecto-tres-js-agencia-viajes/)

Este proyecto es una aplicación web interactiva desarrollada en **JavaScript** que permite explorar destinos turísticos de Colombia y conocer sus precios. Los usuarios pueden cambiar entre diferentes ciudades para visualizar información detallada y atractiva de cada una.

## 📋 Requisitos previos

- Conocimientos básicos de HTML y CSS.
- Un entorno de desarrollo para escribir y ejecutar código JavaScript.

## ✈️ Destinos disponibles

- **Cartagena** – Historia y color en la ciudad amurallada.
- **Santa Marta** – Playas, montaña y cultura en un mismo lugar.
- **Medellín** – Innovación y tradición en la ciudad de la eterna primavera.
- **San Andrés** – El mar de siete colores y su encanto isleño.

---

## 📋 Qué aprenderás con este proyecto

- Manejo básico del **DOM** con JavaScript.
- Uso de **eventos** para actualizar contenido dinámicamente.
- Organización de información mediante **objetos** en un archivo externo.
- Estilización con **HTML y CSS** para crear una interfaz atractiva.

---

## 📦 Instalación y uso

1. Clona este repositorio o descarga los archivos.
2. Asegúrate de incluir:
   - Un archivo **HTML** con la estructura base.
   - Un archivo **CSS** para el estilo.
   - El archivo `ciudades.js` con la información de los destinos.
   - El script JavaScript que maneja la interacción.
3. Abre el archivo `index.html` en tu navegador y explora los destinos.

---

## 🫵 Cómo funciona
1. El archivo `ciudades.js` contiene la información de cada destino en formato de objeto (`titulo`, `subtitulo`, `descripcion`).
2. Al hacer clic en el enlace de una ciudad, un **evento JavaScript** captura la selección.
3. La función `obtenerData` busca la información correspondiente y actualiza el contenido de la página.
4. Se resalta el destino seleccionado con una clase `activo` para mejorar la experiencia visual.

El código JavaScript se encarga de **actualizar dinámicamente** la información de la página cuando el usuario selecciona una ciudad colombiana desde el menú de enlaces.

### 📥 Importación de datos de las ciudades

Los datos de ciudades como **Cartagena**, **Santa Marta**, **Medellín** y **San andrés** se importan desde el archivo `ciudades.js`, el cual contiene la información estructurada de cada destino turístico.
Es importante asegurarse de que este archivo esté disponible en el repositorio junto con el resto del código.

### 🔍 Obtención de elementos del DOM

Se utiliza el método `document.getElementById` para acceder a los elementos HTML que serán actualizados al seleccionar una ciudad.
Estos elementos se guardan en variables como:

- **`enlaces`**: colección de todos los enlaces (`<a>`) de la página.
- **`titulo`**: etiqueta `<h1>` que muestra el nombre de la ciudad.
- **`subTitulo`**: etiqueta `<h2>` para el subtítulo de la ciudad.
- **`descripcion`**: etiqueta `<p>` donde se despliega la descripción turística.

### 🖱️ Eventos `click` en los enlaces

Mediante un bucle `forEach`, se agrega un evento `click` a cada enlace de ciudad.
Cuando el usuario hace clic, el código ejecuta las siguientes acciones:

1. Elimina la clase `activo` de todos los enlaces.
2. Asigna la clase `activo` al enlace seleccionado.
3. Obtiene la información de la ciudad mediante la función `obtenerData`, usando el texto del enlace como referencia.
4. Actualiza el contenido del DOM con los datos de la ciudad elegida.

---

## 🛠 Personalización

Puedes ampliar el proyecto:

- Añadiendo más ciudades en `ciudades.js`.
- Incorporando imágenes para cada destino.
- Implementando filtros por precio o categoría.
- Conectando con una API de viajes para obtener información en tiempo real.

---

## 🚀 Objetivo del proyecto

Este ejercicio tiene como finalidad reforzar conocimientos de **JavaScript** para manipular el DOM, trabajar con eventos y organizar datos.
Es una base perfecta para futuros proyectos más complejos como catálogos, portafolios o aplicaciones de reservas.
