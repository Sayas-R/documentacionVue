<template>
  <div class="contenedor">
    <div class="contenedorInicio">
      <img :src="imagen" alt="Logo de Vue.js" class="imagenVue">
      <div class="queEsVue">
        <h1>Uso Avanzado: Router y Pinia</h1>
        <h2>
          Para construir aplicaciones grandes y robustas, necesitamos herramientas que manejen la
          navegación (Vue Router) y el estado global (Pinia), permitiendo que la información
          fluya de manera eficiente a través de todos los componentes.
        </h2>
      </div>
    </div>

    <div class="seccion-tema">
      <h2>1. Vue Router</h2>
      <p>
        Es el sistema oficial que permite crear aplicaciones de una sola página (SPA).
        Se encarga de mapear URLs a componentes de Vue, cambiando la vista sin recargar la página.
      </p>

      <h3>Instalación y Configuración Paso a Paso</h3>
      <ol class="pasos-instalacion">
        <li>
          <h4>Instalación del Paquete</h4>
          <p>Ejecuta el comando en tu terminal para añadir el router a tu proyecto:</p>
          <pre><code>npm i vue-router@4</code></pre>
        </li>
        <li>
          <h4>Configuración en <code>main.js</code></h4>
          <p>Integra el router con tu aplicación de Vue con el siguiente codigo:</p>
          <pre><code>
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index.js'; // Importa tu router

const app = createApp(App);
app.use(router); // <-- Le decimos a Vue que use el router
app.mount('#app');</code></pre>
        </li>
        <li>
          <h4>Configuracion del archivo de rutas</h4>
          <p>Ahora crea el archivo (routes.js) preferiblemente dentro de una carpeta (routes) y escribe el siguiente
            codigo:
          <pre><code>
import Login from "../components/login.vue" // <-- Se importan las vistas o archivos que se van a conectar
import Home from "../components/Home.vue"
import {createRouter,createWebHasHistory} from "vue-router"

const routes = [
{path:"/", component:Login},
{path:"/home", component:Home, beforeEnter:requireAuth}
]

export const router = createRouter({
  history:createWebHasHistory(),
  routes
})
            </code></pre>
          </p>
        </li>
        <li>
          <h4>Uso de <code>&lt;router-view&gt;</code></h4>
          <p>Debemos implementar el router-view en el componente padre que va a renderizar las vistas. En tu componente
            principal (<code>App.vue</code>), define dónde se dibujarán las vistas:</p>
          <pre><code>
&lt;template&gt;
  &lt;div&gt;
    &lt;router-link to="/home"&gt;Ir a Inicio&lt;/router-link&gt;  &lt;!--Aquí se enlazan las rutas que establecimos en el archivo (routes.js)
    &lt;button type="button"&gt;&lt;router-link to="/"&gt;Login&lt;/router-link&gt;&lt;/button&gt;  &lt;!-- Ruta enlazada a un boton
    &lt;router-view&gt;&lt;/router-view&gt; &lt;!-- Aquí se cargan las vistas --&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
        </li>
      </ol>
    </div>

    <div class="seccion-tema">
      <h2>2. Pinia: Gestión de Estado Global</h2>
      <p>
        Pinia es el gestor de estado recomendado para Vue. Permite compartir datos (el "estado")
        entre componentes sin importar cuán lejos estén en la jerarquía, simplificando la comunicación.
      </p>

      <h3>Instalación y Definición de un Store</h3>
      <ol class="pasos-instalacion">
        <li>
          <h4>Instalación del Paquete</h4>
          <p>Ejecuta el comando en tu terminal:</p>
          <pre><code>npm install pinia</code></pre>
        </li>
        <li>
          <h4>Integración en <code>main.js</code></h4>
          <p>Crea la instancia de Pinia y úsala en la aplicación, similar al router:</p>
          <pre><code>// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia'; <-- importamos pinia
import App from './App.vue';

const pinia = createPinia()
const app = createApp(App);

app.use(pinia()); // <-- Instalación de Pinia
app.mount('#app');</code></pre>
        </li>
        <li>
          <h4>Estructura de un Store</h4>
          <p>Creamos una carpeta llamada stores y dentro creamos un archivo llamado user.js</p>
          <p>Un Store es un archivo JavaScript con tres partes esenciales (State, Getters, Actions):</p>
          <pre><code>// stores/user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: nombreUsuario,
  }),
});
          </code></pre>
          <p>Después podemos llamar este estado en cualquier componente
            Haciendo la siguiente importación:
          <pre><code>Import {useUserStore} from “../stores/user.js/</code></pre>
          <p>Y creamos una variable que contenga esta importación</p>
          <pre><code>const userStore = useUserStore()</code></pre>
          <p>Después Podemos usar userStore en el template para llevar cualquier estado</p>
          </p>
        </li>
      </ol>

      <p class="nota">
        <strong>Uso en Componentes:</strong> En cualquier componente, importas el Store (ej:
        <code>const store = useAuthStore()</code>) y accedes a los datos con <code>store.logeado</code> y a las
        funciones con <code>store.iniciarSesion()</code>.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let imagen = ref("https://www.worldinside.com.ua/wp-content/uploads/2025/01/Vue.js-logo.webp");
</script>

<style scoped>
/* Estilos generales (mantenidos para el diseño del manual) */
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
  0% {
    transform: rotateY(0);
  }

  100% {
    transform: rotateY(360deg);
  }
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

.pasos-instalacion {
  list-style: none;
  padding-left: 0;
}

.pasos-instalacion li {
  margin-bottom: 25px;
  padding: 15px;
  background-color: #f8f8f8;
  border-left: 4px solid #35495e;
  border-radius: 8px;
}

.pasos-instalacion h4 {
  color: #35495e;
  font-size: 1.5rem;
  margin-top: 0;
}

pre {
  background-color: #2d2d2d;
  color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
  margin-top: 10px;
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