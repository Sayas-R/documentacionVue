<template>
  <div class="contenedor">
    <div class="contenedorInicio">
      <img :src="imagen" alt="Logo de Vue.js" class="imagenVue">
      <div class="queEsVue">
        <h1>Componentes en Vue</h1>
        <h2>
          Los componentes son la espina dorsal de una aplicación de Vue. Nos permiten
          crear interfaces de usuario modulares y reutilizables, facilitando la organización
          y el mantenimiento del código.
        </h2>
      </div>
    </div>

    <div class="seccion-tema">
      <h2>Importación y Componentización</h2>
      <p>
        La "componentización" es el proceso de dividir la interfaz de tu aplicación en
        piezas pequeñas e independientes. Cada pieza es un componente. Por ejemplo, en una
        tienda en línea, tendrías componentes separados para un botón, un producto, una
        barra de navegación y un carrito de compras.
      </p>
      <p>
        Para usar un componente en otro, primero debes **importarlo** desde su archivo.
        El proceso es el siguiente:
      </p>

      <div class="pasos-importacion">
        <div class="paso-importar">
          <h3>Paso 1: Crea el componente hijo</h3>
          <p>
            Crea un nuevo archivo Vue, por ejemplo, `BotonPersonalizado.vue`,
            con su propio `template`, `script` y `style`.
          </p>
          <pre><code>&lt; src/components/BotonPersonalizado.vue &gt;
&lt;template&gt;
  &lt;button class="boton"&gt;Mi Botón&lt;/button&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'BotonPersonalizado'
}
&lt;/script&gt;

&lt;style scoped&gt;
.boton {
  background-color: #41b883;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
&lt;/style&gt;</code></pre>
        </div>

        <div class="paso-importar">
          <h3>Paso 2: Importa y usa el componente</h3>
          <p>
            En tu componente principal (el que usará al hijo), lo importas usando
            la sintaxis de JavaScript y lo registras en el <code>&lt;script&gt;</code>. Luego,
            lo utilizas como si fuera una etiqueta HTML normal en tu <code>&lt;template&gt;</code>.
          </p>
          <pre><code>&lt; Archivo Padre: componentes.vue --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;h3&gt;Ejemplo de Componente Importado&lt;/h3&gt;
    &lt;BotonPersonalizado /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import BotonPersonalizado from './BotonPersonalizado.vue';

export default {
  components: {
    BotonPersonalizado
  }
}
&lt;/script&gt;</code></pre>
        </div>
      </div>
    </div>

    <div class="seccion-tema">
      <h2>Props: Comunicación de Padre a Hijo</h2>
      <p>
        Las **`Props`** (abreviatura de "propiedades") son la forma en que un componente padre
        le **pasa datos** a un componente hijo. Es la manera de hacer que los componentes
        sean dinámicos y reutilizables. Piensa en las `props` como los "argumentos"
        de una función: el componente padre le envía información al hijo para que este la use.
      </p>

      <h3>¿Cómo funcionan las Props?</h3>
      <p>
        Se definen en el componente hijo y se envían desde el componente padre.
      </p>

      <div class="compartimentos">
        <div class="opcion">
          <h4>Paso 1: Definir las props en el componente hijo</h4>
          <p>
            En el componente hijo, usas <code>defineProps()</code> para declarar qué datos
            esperas recibir. Puedes especificar el tipo de dato que esperas para mayor seguridad.
          </p>
          <pre><code>&lt;!-- BotonDinamico.vue --&gt;
&lt;script setup&gt;
  const props = defineProps({
    texto: {
      type: String,
      required: true
    }
  });
&lt;/script&gt;</code></pre>
        </div>

        <div class="opcion">
          <h4>Paso 2: Pasar las props desde el componente padre</h4>
          <p>
            En el componente padre, usas la sintaxis de **<code>v-bind</code>** (o su atajo, los dos puntos
            <code>:</code>)
            para enviar la información al componente hijo.
          </p>
          <pre><code>&lt;!-- Componente Padre --&gt;
&lt;template&gt;
  &lt;BotonDinamico :texto="mensajeBoton" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import BotonDinamico from './BotonDinamico.vue';

const mensajeBoton = ref('Haz clic aquí');
&lt;/script&gt;</code></pre>
        </div>
      </div>
      <p class="nota">
        <strong>Regla de oro:</strong> Los datos fluyen en una sola dirección: de padre a hijo. Un componente
        hijo no puede modificar directamente una prop que recibió de su padre.
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