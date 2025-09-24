<template>
  <div class="contenedor">
    <div class="contenedorInicio">
      <img :src="imagen" alt="Logo de Vue.js" class="imagenVue">
      <div class="queEsVue">
        <h1>Recursos y Bibliografía</h1>
        <h2>
          El mundo del desarrollo web está en constante cambio. Utiliza estos recursos
          para complementar este manual y mantenerte actualizado con las mejores
          prácticas y herramientas de Vue.js.
        </h2>
      </div>
    </div>
    
    <div class="seccion-tema">
      <h2>Documentación y Guías Oficiales </h2>
      <p>
        La documentación oficial de Vue es el mejor lugar para aprender y consultar. Es clara,
        completa y siempre está actualizada con las últimas versiones.
      </p>
      <ul>
        <li>
          <a href="https://vuejs.org/guide/introduction.html" target="_blank">
            Guía Oficial de Vue 3
          </a> - La guía principal para aprender Vue 3, desde conceptos básicos hasta temas avanzados.
        </li>
        <li>
          <a href="https://vuejs.org/api/" target="_blank">
            Referencia de la API
          </a> - Un listado detallado de todas las funciones y componentes de Vue.
        </li>
        <li>
          <a href="https://vuejs.org/style-guide/" target="_blank">
            Guía de Estilo Oficial
          </a> - Conoce las mejores prácticas para escribir código Vue limpio y mantenible.
        </li>
      </ul>
    </div>
    
    <div class="seccion-tema">
      <h2>Herramientas de Desarrollo y Descargas </h2>
      <p>
        Estas herramientas son esenciales para el flujo de trabajo de cualquier desarrollador de Vue.
      </p>
      <ul>
        <li>
          <a href="https://nodejs.org/es/download" target="_blank">
            Descargar Node.js
          </a> - Necesitas Node.js para usar el gestor de paquetes npm y otras herramientas como Vite.
        </li>
        <li>
          <a href="https://vitejs.dev/guide/" target="_blank">
            Vite
          </a> - La herramienta de construcción oficial de Vue, conocida por su rapidez y eficiencia.
        </li>
        <li>
          <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank">
            Volar (Extensión de Vue para VS Code)
          </a> - Mejora la experiencia de desarrollo en VS Code con soporte para archivos `.vue`.
        </li>
      </ul>
    </div>
    
    <div class="seccion-tema">
      <h2>Videos Explicativos y Tutoriales </h2>
      <p>
        Si prefieres aprender de forma visual, estos canales de YouTube ofrecen contenido de alta calidad
        y explicaciones claras sobre todos los temas del manual.
      </p>
      <ul>
        <li>
          <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9hp2J0F1K6xY_H3f-w-BkL5" target="_blank">
            Curso de Vue.js - The Net Ninja
          </a> - Un curso completo y popular en inglés, ideal para quienes comienzan.
        </li>
        <li>
          <a href="https://www.youtube.com/@VueMastery" target="_blank">
            Vue Mastery
          </a> - Canal oficial con tutoriales detallados sobre temas específicos como Pinia y la Composition API.
        </li>
        <li>
          <a href="https://www.youtube.com/playlist?list=PLy8F9yv4_yqfN1yUa3R8t9mB3u6jC8e8_" target="_blank">
            Curso de Vue 3 (español) - Midudev
          </a> - Un excelente recurso en español que cubre desde los fundamentos hasta proyectos prácticos.
        </li>
      </ul>
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

.seccion-tema p {
  font-size: 1.2rem;
  line-height: 1.6;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #f0f0f0;
  border-left: 5px solid #35495e;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  font-size: 1.1rem;
}

a {
  color: #35495e;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
  color: #41b883;
}
</style>