<template>
  <div class="contenedor">
    <div class="contenedorInicio">
      <img :src="imagen" alt="Logo de Vue.js" class="imagenVue">
      <div class="explicacion">
        <h1>Conceptos Básicos de Vue</h1>
        <h2>
          Para empezar a trabajar con Vue, es fundamental entender sus conceptos principales.
          Aquí exploramos las APIs para organizar tu código, el uso de componentes y cómo
          mostrar datos en tu página web.
        </h2>
      </div>
    </div>

    <div class="primerTema">
      <div class="seccion-tema">
        <h2>Options API</h2>
        <p>
          Es la forma original y tradicional de escribir componentes en Vue. En este enfoque,
          la lógica del componente se organiza en un objeto de opciones predefinidas como
          <code>data</code>, <code>methods</code>, <code>computed</code>, y <code>watch</code>.
          Te obliga a poner cada cosa en su lugar, lo que hace que tu código sea más fácil de
          leer y entender para ti y para otros desarrolladores.
        </p>
        <!-- <div class="seccion-tema"> -->
        <h3>Compartimentos de la Option API</h3>
        <p>
          Este objeto principal es como una caja con diferentes compartimentos. Cada compartimento
          es una propiedad del objeto principal del componente, tiene un propósito específico
          y guarda un tipo de lógica diferente:
        </p>
        <!-- </div> -->
      </div>

      <div class="cards">
        <transition name="fade" mode="out-in">
          <div v-if="cara === 1" key="1" class="opcion">
            <h4><code>data()</code></h4>
            <p>
              Es donde declaras las variables reactivas de tu componente. Esta función devuelve
              un objeto. Dentro de ese objeto, pones las variables que necesitas.
            </p>
            <pre><code>data() {
            return {
            contador: 0,
            mensaje: "Hola Vue"
            };
            }</code></pre>
          </div>

          <div v-else-if="cara === 2" key="2" class="opcion">
            <h4><code>methods()</code></h4>
            <p>
              Es donde defines las funciones o "acciones" que tu componente puede realizar.
              Es un objeto donde cada propiedad es el nombre de una función.
            </p>
            <pre><code>methods: {
            incrementar() {
            this.contador++;
            },
            saludar() {
            alert(this.mensaje);
            }
          }</code></pre>
          </div>

          <div v-else-if="cara === 3" key="3" class="opcion">
            <h4><code>computed()</code></h4>
            <p>
              Sirve para crear propiedades "computadas". Son valores que no se guardan directamente,
              sino que se calculan automáticamente a partir de otras variables de `data`. Vue detecta
              de qué variables dependen y recalcula el resultado solo cuando esas variables cambian.
            </p>
            <pre><code>data() {
              return {
                precio: 10,
                cantidad: 2
              };
            },
            computed: {
              total() {
                return this.precio * this.cantidad;
              }
            }</code></pre>
          </div>

          <div v-else key="4" class="opcion">
            <h4><code>Watch()</code></h4>
            <p>
              La propiedad watch es un compartimento en la Options API que funciona como un "vigilante" o "monitor" de
              tus datos. Te permite ejecutar una función cuando una variable reactiva específica (de tu sección data)
              cambia de valor. Mientras que computed se usa para calcular un nuevo valor basado en datos
              existentes, watch se usa para ejecutar una acción o un efecto secundario (como hacer una llamada a una API
              o actualizar el título del documento) en respuesta a un cambio de datos.
              Uso común: Acciones asíncronas, temporizadores o lógica compleja que debe ocurrir tras un cambio en el
              estado.
            </p>
            <pre><code>data() {
              return {
                precio: 10,
                cantidad: 2
              };
            },
            computed: {
              total() {
                return this.precio * this.cantidad;
              }
            }</code></pre>
          </div>
        </transition>
        <button @click="next">Cambiar texto</button>
      </div>
    </div>

    <div class="seccion-tema">
      <h2>Composition API</h2>
      <p>
        La Composition API es la forma moderna de organizar el código en Vue 3. A diferencia
        de la Options API que agrupa la lógica por tipo (datos, métodos, etc.), esta API te
        permite agrupar la lógica por característica o funcionalidad. Esto es muy útil en
        componentes grandes, donde la lógica de una sola función puede quedar dispersa en varias
        secciones de la Options API.
      </p>

      <h3>¿Cómo funciona?</h3>
      <p>
        La Composition API se basa principalmente en una función llamada <code>setup()</code>,
        la cual es el punto de entrada para toda la lógica del componente. Dentro de esta
        función, usas otras funciones especiales como <code>ref</code> y <code>reactive</code>
        para crear datos reactivos.
      </p>

      <div class="compartimentos">
        <div class="opcion">
          <h4><code>ref</code></h4>
          <p>
            Se utiliza para crear una variable reactiva. Vue la "envuelve" en un objeto
            especial para que pueda ser observada. Para acceder a su valor, usas <code>.value</code>.
          </p>
          <pre><code>import { ref } from 'vue';

          const contador = ref(0);

          function incrementar() {
          contador.value++; // Accedes al valor con .value
          }</code></pre>
        </div>
        <div class="opcion">
          <h4><code>reactive</code></h4>
          <p>
            Se utiliza para crear un objeto o array reactivo. Vue hace que todas sus
            propiedades sean reactivas. No necesitas usar <code>.value</code> para acceder a sus
            propiedades.
          </p>
          <pre><code>import { reactive } from 'vue';
            
          const estado = reactive({
          precio: 10,
          cantidad: 2
          });</code></pre>
        </div>
      </div>
      <p class="nota">
        <strong>Ventaja principal:</strong> Permite organizar tu código de forma más lógica y mantenible, agrupando todo
        lo relacionado con una función en un solo lugar.
      </p>
    </div>

    <div class="seccion-tema">
      <h2>Componentes</h2>
      <p>
        Piensa en los componentes como las piezas de un kit de Lego. En lugar de construir
        toda tu página web desde un solo bloque gigante, Vue te permite dividir la interfaz
        de usuario en piezas independientes, reutilizables y autocontenidas.
      </p>
      <h3>Estructura de un Componente</h3>
      <p>
        Un componente de Vue se define en un Single File Component (.vue) y está dividido en tres secciones
        principales:
      </p>
      <div class="compartimentos">
        <div class="opcion">
          <h4><code>&lt;template&gt;</code></h4>
          <p>
            Aquí defines la estructura HTML de tu componente. Es la parte visible para el usuario.
          </p>
        </div>
        <div class="opcion">
          <h4><code>&lt;script&gt;</code></h4>
          <p>
            Aquí escribes la lógica de JavaScript de tu componente. Es donde declaras datos,
            defines funciones y manejas el comportamiento.
          </p>
        </div>
        <div class="opcion">
          <h4><code>&lt;style&gt;</code></h4>
          <p>
            Aquí añades los estilos CSS para tu componente. Si usas la propiedad `scoped`,
            los estilos solo afectarán a este componente, evitando conflictos con otras partes de tu
            página web.
          </p>
        </div>
      </div>
      <p class="nota">
        <strong>Ventaja principal:</strong> Promueve la reutilización del código y hace que tu
        aplicación sea más fácil de mantener y escalar.
      </p>
    </div>

    <div class="seccion-tema">
      <h2>Interpolación</h2>
      <p>
        La interpolación en Vue es la forma más sencilla y común de mostrar datos de tu
        código de JavaScript en el HTML. Permite "inyectar" valores dinámicos
        dentro de las etiquetas HTML.
      </p>
      <h3>¿Cómo funciona?</h3>
      <p>
        La interpolación utiliza una sintaxis especial de doble llave o "bigotes" (<code>{{ }}</code>).
        Dentro de estas llaves, puedes poner el nombre de una variable definida en
        tu componente de Vue.
      </p>
      <pre><code>&lt;p&gt;Hola, mi nombre es: {{ nombre }}&lt;/p&gt;</code></pre>
      <p>
        Si la variable `nombre` tiene el valor `"Juan"`, el resultado en la página
        web sería: `Hola, mi nombre es: Juan`.
      </p>
      <p class="nota">
        <strong>La magia de la reactividad:</strong> Si el valor de la variable cambia en
        algún momento, el texto en la página web se actualizará automáticamente
        para mostrar el nuevo valor.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let imagen = ref("https://www.worldinside.com.ua/wp-content/uploads/2025/01/Vue.js-logo.webp");
const cara = ref(1)

function next() {
  cara.value = cara.value === 4 ? 1 : cara.value + 1
}

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

.explicacion {
  flex: 1;
}

.explicacion h1 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 80px;
  margin-left: 80px;
}

.explicacion h2 {
  font-size: 29px;
  line-height: 40px;
  text-align: center;
}

.primerTema {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: auto;
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

/* .cards {} */

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