<template>
  <div class="contenedor">
    <div class="contenedorInicio">
      <img :src="imagen" alt="Logo de Vue.js" class="imagenVue">
      <div class="queEsVue">
        <h1>Renderizado en Vue</h1>
        <h2>
          El renderizado es el proceso mediante el cual Vue convierte tus datos y plantillas
          en la interfaz de usuario visible. Para ello, utiliza el ciclo de vida del componente
          y directivas especiales para controlar qué y cómo se muestra la información.
        </h2>
      </div>
    </div>

    <div class="seccion-tema">
      <h2>El Ciclo de Vida de un Componente </h2>
      <p>
        El ciclo de vida de un componente es una serie de etapas que atraviesa desde su
        creación hasta su destrucción. Vue nos permite "engancharnos" a estas etapas
        con funciones especiales llamadas **hooks** para ejecutar código en momentos específicos.
      </p>

      <div class="compartimentos">
        <div class="opcion">
          <h4><code>onMounted()</code></h4>
          <p>Se ejecuta justo después de que el componente ha sido insertado en el DOM.</p>
          <pre><code>import { onMounted } from 'vue';
onMounted(() => {
  console.log('Componente montado!');
});</code></pre>
        </div>

        <div class="opcion">
          <h4><code>onUnmounted()</code></h4>
          <p>Se ejecuta justo antes de que el componente sea eliminado del DOM.</p>
          <pre>
            <code>
          import { onUnmounted } from 'vue';
          onUnmounted(() => {
          console.log('Componente a punto de ser destruido.');
          });
</code>
</pre>
        </div>
      </div>
      <p class="nota">
        <strong>Importante:</strong> Los hooks del ciclo de vida son cruciales para manejar el comportamiento de tu
        componente en diferentes momentos de su existencia.
      </p>
    </div>

    <div class="seccion-tema">
      <h2>Directivas de Vue</h2>
      <p>
        Las directivas son atributos especiales que se añaden a las etiquetas HTML con un
        prefijo <code>v-</code>. Sirven para aplicar lógica al DOM de forma declarativa.
      </p>

      <h3><code>v-if</code> y <code>v-else</code> (Renderizado Condicional)</h3>
      <p>
        Estas directivas te permiten renderizar un elemento solo si se cumple una condición.
      </p>
      <pre v-pre><code>
      &lt;template&gt;
        &lt;ul&gt;
          &lt;li v-for="item in listaItems" :key="item.id"&gt;
            {{ item.nombre }}
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/template&gt;

      &lt;script setup&gt;
        import { ref } from 'vue';
        const listaItems = ref([
          { id: 1, nombre: 'Laptop' },
          { id: 2, nombre: 'Mouse' },
          { id: 3, nombre: 'Teclado' }
        ]);
      &lt;/script&gt;
      </code></pre>
      <p class="nota">
        <strong>Consejo:</strong> Usa el atributo <code>:key</code> con <code>v-for</code> para ayudar a Vue a
        identificar
        cada elemento de forma única, lo que optimiza el rendimiento.
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
  /* background-color: #fffde7; */
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