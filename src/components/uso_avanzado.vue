<template>
  <div class="contenedor">
    <div class="contenedorInicio">
      <img :src="imagen" alt="Logo de Vue.js" class="imagenVue">
      <div class="queEsVue">
        <h1>Uso Avanzado</h1>
        <h2>
          Para llevar tus aplicaciones al siguiente nivel, necesitas herramientas para gestionar
          la navegación y el estado de forma eficiente. Aquí exploramos Vue Router y Pinia,
          dos pilares en el desarrollo de aplicaciones complejas.
        </h2>
      </div>
    </div>

    <div class="seccion-tema">
      <h2>Vue Router</h2>
      <p>
        Vue Router es el sistema de navegación para las aplicaciones de una sola página (SPA).
        Permite a los usuarios navegar entre diferentes vistas sin recargar la página,
        lo que resulta en una experiencia fluida y rápida.
      </p>

      <h3>¿Cómo funciona?</h3>
      <p>
        Vue Router asocia una URL específica con un componente de Vue. Cuando la URL del navegador
        cambia, Vue Router renderiza el componente correspondiente en el lugar de la etiqueta
        <code>&lt;router-view&gt;</code>, que actúa como un marcador de posición.
      </p>

      <div class="pasos-importacion">
        <div class="paso-importar">
          <h3>Paso 1: Definir las rutas</h3>
          <p>
            En un archivo de configuración (ej. `routes.js`), defines las rutas de tu aplicación.
          </p>
          <pre><code>import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});</code></pre>
        </div>

        <div class="paso-importar">
          <h3>Paso 2: Usar las etiquetas de navegación</h3>
          <p>
            Utiliza <code>&lt;router-link&gt;</code> para navegar y <code>&lt;router-view&gt;</code>
            para mostrar el contenido de la ruta.
          </p>
          <pre><code>&lt;!-- En App.vue --&gt;
&lt;template&gt;
  &lt;nav&gt;
    &lt;router-link to="/"&gt;Inicio&lt;/router-link&gt;
    &lt;router-link to="/about"&gt;Acerca de&lt;/router-link&gt;
  &lt;/nav&gt;
  &lt;router-view /&gt;
&lt;/template&gt;</code></pre>
        </div>
      </div>
      <p class="nota">
        <strong>Importante:</strong> Vue Router intercepta los clics en <code>&lt;router-link&gt;</code> para evitar la recarga completa de la página.
      </p>
    </div>

    <div class="seccion-tema">
      <h2>Pinia</h2>
      <p>
        Pinia es el gestor de estado oficial de Vue. Sirve como una "caja de almacenamiento"
        central y global para los datos de tu aplicación, permitiendo que cualquier componente
        acceda y modifique el estado de forma predecible.
      </p>
      
      <h3>Conceptos Clave</h3>
      <div class="compartimentos">
        <div class="opcion">
          <h4><code>state</code></h4>
          <p>Son los datos reactivos y globales que deseas compartir en tu aplicación.</p>
        </div>
        <div class="opcion">
          <h4><code>actions</code></h4>
          <p>Son funciones que modifican el estado. Son la única forma de cambiar los datos en el store.</p>
        </div>
        <div class="opcion">
          <h4><code>getters</code></h4>
          <p>Son como propiedades computadas para el estado global, que devuelven un valor calculado a partir del estado.</p>
        </div>
      </div>
      <p class="nota">
        <strong>Ventaja:</strong> Permite compartir datos de forma eficiente entre componentes sin importar su ubicación en el árbol de componentes.
      </p>
    </div>

    <div class="seccion-tema">
      <h2>Pinia-Plugin-Persistedstate</h2>
      <p>
        Por defecto, los datos de Pinia se pierden al recargar la página. Este plugin
        extiende Pinia para que el estado de tu aplicación se guarde automáticamente en el
        almacenamiento local del navegador, persistiendo incluso después de un refresco.
      </p>

      <h3>¿Cómo funciona?</h3>
      <p>
        Después de instalarlo (`npm install pinia-plugin-persistedstate`), solo necesitas
        agregar la propiedad <code>persist: true</code> a la definición de tu store en Pinia.
      </p>
      
      <pre><code>import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    usuario: null,
    token: null
  }),
  actions: {
    setUsuario(user) {
      this.usuario = user;
    }
  },
  persist: true // ¡Activamos la persistencia!
});</code></pre>
      <p class="nota">
        <strong>Uso común:</strong> Es perfecto para guardar el estado de autenticación de un
        usuario o los productos en un carrito de compras para que no se pierdan al
        navegar o recargar.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let imagen = ref("https://www.worldinside.com.ua/wp-content/uploads/2025/01/Vue.js-logo.webp");
</script>

<style scoped>
.contenedor {
  font-family: Arial, sans-serif;
  color: #333;
  padding: 20px;
  background-color: #ECECECFF;
}

.contenedorInicio {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.imagenVue {
  width: 550px;
  height: 500px;
  animation: imagenVue 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

@keyframes imagenVue {
  0% { transform: rotateY(0); }
  100% { transform: rotateY(360deg); }
}

.queEsVue {
  flex: 1;
}

.queEsVue h1 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 80px;
  margin-left: 80px;
}

.queEsVue h2 {
  font-size: 29px;
  line-height: 40px;
  text-align: center;
}

.seccion-tema {
  background-color: #fff;
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.seccion-tema h2 {
  font-size: 3rem;
  color: #41b883;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
  margin-top: 0;
}

.seccion-tema h3 {
  font-size: 2rem;
  color: #35495e;
}

.seccion-tema p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.pasos-importacion {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
}

.paso-importar {
  background-color: #f0f0f0;
  border-left: 5px solid #35495e;
  padding: 20px;
  border-radius: 8px;
}

.paso-importar h3 {
  color: #35495e;
  font-size: 1.5rem;
  margin-top: 0;
}

.compartimentos {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.opcion {
  background-color: #f0f0f0;
  border-left: 5px solid #35495e;
  padding: 20px;
  border-radius: 8px;
}

.opcion h4 {
  color: #35495e;
  font-size: 1.5rem;
  margin-top: 0;
}

.opcion p {
  font-size: 1.1rem;
}

pre {
  background-color: #2d2d2d;
  color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
}

code {
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', Courier, monospace;
}

.nota {
  background-color: #fffde7;
  border-left: 4px solid #ffeb3b;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
}

.nota strong {
  color: #fbc02d;
}

.nota p {
  margin: 0;
  font-style: italic;
}
</style>