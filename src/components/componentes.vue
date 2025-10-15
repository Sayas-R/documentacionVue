<template>
  <div class="contenedor">
    <div class="contenedorInicio">
      <img :src="imagen" alt="Logo de Vue.js" class="imagenVue">
      <div class="queEsVue">
        <h1>Componentes en Vue: Comunicación Total</h1>
        <h2>
          Los componentes son bloques de código reutilizables. Entender cómo se organizan
          y cómo se comunican entre sí (Padre -> Hijo con Props y Hijo <- Padre con Emits)
          es fundamental para construir aplicaciones escalables.
        </h2>
      </div>
    </div>

    <div class="seccion-tema">
      <h2>Componentes</h2>
      <p>
        Piensa en los componentes como las piezas de un kit de Lego. En lugar de construir
        toda tu página web desde un solo bloque gigante, Vue te permite dividir la interfaz
        de usuario en piezas independientes, reutilizables y autocontenidas.
      </p>
      <h3>Estructura de un Componente</h3>
      <div class="compartimentos">
        <div class="opcion">
          <h4><code>&lt;template&gt;</code> (La Vista)</h4>
          <p>Aquí defines la estructura HTML de tu componente. Es la parte visible para el usuario, solo debe tener un
            elemento raíz (un solo <code>&lt;div&gt;</code> contenedor).
          </p>
        </div>
        <div class="opcion">
          <h4><code>&lt;script setup&gt;</code> (La Lógica)</h4>
          <p>Aquí escribes la lógica de JavaScript de tu componente. Es donde declaras datos reactivos
            (<code>ref</code>, <code>reactive</code>), defines funciones y manejas el comportamiento.</p>
        </div>
        <div class="opcion">
          <h4><code>&lt;style scoped&gt;</code> (Los Estilos)</h4>
          <p>Aquí añades los estilos CSS para tu componente. Si usas la propiedad `scoped`, los estilos solo afectarán a
            este componente, evitando conflictos con otras partes de tu
            página web. El atributo <code>scoped</code> aísla los estilos para que no afecten a otros componentes.</p>
        </div>
      </div>
      <p class="nota">
        <strong>Ventaja principal:</strong> Promueve la reutilización del código y hace que tu
        aplicación sea más fácil de mantener y escalar.
      </p>
    </div>

    <div class="seccion-tema">
      <h2>2. Props: Comunicación de Padre a Hijo (➡️)</h2>
      <p>
        Las **Props** son la forma de enviar datos del Padre al Hijo. El Hijo las recibe como si fueran atributos,
        y las usa para renderizar información dinámica.
      </p>

      <h3>Regla Unidireccional</h3>
      <p>
        Los datos fluyen solo hacia abajo. El componente Hijo puede leer la prop, pero no debe cambiarla.
      </p>

      <pre><code>&lt;!-- Componente Hijo: MensajeAlerta.vue --&gt;
&lt;script setup&gt;
  const props = defineProps({
    titulo: { type: String, required: true },
    color: { type: String, default: 'blue' }
  });
&lt;/script&gt;
&lt;template&gt;
  &lt;div :style="{ backgroundColor: color }"&gt;
    &lt;h3&gt;{{ titulo }}&lt;/h3&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;!-- Componente Padre --&gt;
&lt;template&gt;
  &lt;MensajeAlerta titulo="Aviso Importante" color="red" /&gt; &lt;!-- Datos estáticos --&gt;
  &lt;MensajeAlerta :titulo="tituloDinamico" :color="colorBase" /&gt; &lt;!-- Datos reactivos (usa :) --&gt;
&lt;/template&gt;
</code></pre>
    </div>

    <div class="seccion-tema">
      <h2>3. Emits: Comunicación de Hijo a Padre (⬅️)</h2>
      <p>
        Los **Emits** son el mecanismo que usa el Hijo para **avisarle** al Padre cuando ha ocurrido
        un evento (ej: un clic). El Padre escucha y reacciona.
      </p>

      <h3>El Proceso de Notificación</h3>
      <ol>
        <li>El Hijo declara qué eventos va a emitir (<code>defineEmits</code>).</li>
        <li>Cuando ocurre algo, el Hijo llama a <code>emit('nombreDelEvento')</code>.</li>
        <li>El Padre "escucha" ese evento usando la sintaxis <code>@nombreDelEvento="funcionPadre"</code>.</li>
      </ol>

      <pre><code>&lt;!-- Componente Hijo: BotonNotificador.vue --&gt;
&lt;script setup&gt;
  // 1. Declaramos el evento
  const emit = defineEmits(['haSidoPresionado']);

  function notificar() {
    // 2. Emitimos el evento al Padre (con un dato extra)
    emit('haSidoPresionado', new Date().toLocaleTimeString()); 
  }
&lt;/script&gt;
&lt;template&gt;
  &lt;button @click="notificar"&gt;Presionar&lt;/button&gt;
&lt;/template&gt;

&lt;!-- Componente Padre --&gt;
&lt;script setup&gt;
  import { ref } from 'vue';
  import BotonNotificador from './BotonNotificador.vue';
  const ultimaHora = ref('');

  // Función que se ejecuta cuando el hijo avisa
  function recibirNotificacion(hora) {
    ultimaHora.value = hora;
    console.log('El hijo ha sido presionado a las:', hora);
  }
&lt;/script&gt;
&lt;template&gt;
  &lt;BotonNotificador @haSidoPresionado="recibirNotificacion" /&gt;
  &lt;p&gt;Última vez notificado: {{ ultimaHora }}&lt;/p&gt;
&lt;/template&gt;</code></pre>
      <p class="nota">
        <strong>Conclusión:</strong> Con Props y Emits, tienes un sistema completo para el flujo de datos: Props para
        enviar datos hacia abajo (Padre a Hijo) y Emits para enviar notificaciones hacia arriba (Hijo a Padre).
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

pre {
  background-color: #2d2d2d;
  color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
}

code {
  background-color: #e0e0e0;
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