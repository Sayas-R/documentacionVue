<template>
  <div class="contenedor">
    <div class="contenedorInstalacion">
      <img :src="imagen" alt="Logo de Vue.js" class="imagenInstalacion">
      <div class="queEsInstalacion">
        <h1>INSTALACIÓN</h1>
        <h2>
          Para empezar a usar Vue, necesitas preparar tu computadora con algunas 
          herramientas. Son muy comunes y fáciles de instalar.
        </h2>
      </div>
    </div>
    
    <div class="requisitos">
      <h1>REQUISITOS PREVIOS</h1>
      <div class="listaRequisitos">
        <div class="requisitoNode">
          <img :src="imagenNode" alt="Logo de Node.js">
          <h1>Node.js y npm</h1>
          <h2>¿Qué es Node.js?</h2>
          <h3>Es la herramienta que permite usar JavaScript, un lenguaje creado para hacer 
            páginas web interactivas, para construir la maquinaria que funciona detrás de las
            aplicaciones. Esto significa que los programadores pueden usar un solo lenguaje para
            todo el proyecto, haciendo que el trabajo sea más rápido y eficiente.</h3>
          <h2>¿Qué es npm?</h2>
          <h3>NPM (Node Package Manager) Es la tienda de herramientas digitales de Node.js. 
            En lugar de tener que crear todo el código desde cero, los programadores pueden 
            usar NPM para descargar y agregar fácilmente soluciones ya hechas y listas para usar. 
            Es una biblioteca enorme de código compartido que ahorra mucho tiempo y esfuerzo.</h3>
          <h3>Desliza hacia abajo y descubre la guía completa paso a paso...</h3>
        </div>
        <div class="requisitoVSCode">
          <img :src="imagenVSCode" alt="Logo de Visual Studio Code">
          <h1>Visual Studio Code</h1>
          <h2>¿Qué es Visual Studio Code?</h2>
          <h3>Es un editor de código que ayuda a los programadores a escribir. Es como un 
            cuaderno inteligente que, además de permitirte escribir, te ayuda a corregir errores, 
            te da sugerencias y te permite agregar funcionalidades extras para hacer que la
            programación sea más fácil y rápida. Es una herramienta muy popular, gratuita y
            versátil.</h3>
          <h4>Desliza hacia abajo y descubre la guía completa paso a paso...</h4>
        </div>
      </div>
    </div>
    <div class="contenedorPasoAPasoNode">
      <h1>PASO A PASO PARA INSTALAR NODE SEGÚN SISTEMA OPERATIVO</h1>
      <h1>Windows:</h1>
      <h2>1. Abre el navegador y y ve a https://nodejs.org</h2>
      <img :src="inicioNode" alt="Inicio de Node">

      <h2>2. Luego, ve a la pestaña "Descargar" y oprimes el botón que dice 
        "Instalador de Windows(.msi)" </h2>
      <img :src="botonDescargar" alt="Boton descargar">
      <img :src="botonMsi" alt="Boton Msi">

      <h2>3. Automáticamente se descargará un archivo que finaliza en .msi, lo que significa que es 
        el instalador normal de Windows
        <img :src="archivoMsi" alt="Archivo Msi">
      </h2>

      <h2>4. Abres el archivo, deja las opciones por defecto y aceptas el acuerdo de licencia </h2>
    </div>

    <div class="instalacionVue">
      <h1>CREAR UN PROYECTO EN VUE</h1>
      <div class="pasosInstalacion">
        <h2>
          1. Abre la terminal en VS Code.<br>
          2. Escribe el siguiente comando:<br>
          <code>npm create vue@latest</code><br><br>

          Esto abrirá un asistente donde:<br>
          - Te pide un nombre para el proyecto.<br>
          - Pregunta si deseas usar TypeScript, Router, Pinia, Vitest, etc.<br>
          - Puedes aceptar la configuración por defecto.<br><br>

          3. Luego entra a la carpeta creada:<br>
          <code>cd nombre-del-proyecto</code><br><br>

          4. Instala las dependencias:<br>
          <code>npm install</code><br><br>

          5. Inicia el servidor de desarrollo:<br>
          <code>npm run dev</code><br><br>

          kSi todo salió bien, te mostrará un enlace como:<br>
          <code>http://localhost:5173/</code><br>
          Ábrelo en el navegador y verás tu primera app en Vue.
        </h2>
      </div>
    </div>

    <div class="extensiones">
      <h1>EXTENSIONES RECOMENDADAS DE VS CODE</h1>
      <div class="listaExtensiones">
        <div class="extensionVolar">
          <img :src="imagenVolar" alt="Imagen de Volar">
          <h1>Volar</h1>
          <h2>
            Extensión oficial de Vue. Ayuda con:<br>
            - Autocompletado<br>
            - Resaltado de errores<br>
            - Navegación en componentes
          </h2>
        </div>
        <div class="extensionPrettier">
          <img :src="imagenPrettier" alt="Imagen de Prettier">
          <h1>Prettier</h1>
          <h2>
            Formatea tu código automáticamente:<br>
            - Alinea<br>
            - Indenta<br>
            - Ordena<br><br>
            Solo guarda tu archivo y listo
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import imagenNode from '/src/imagenes/node.png';
import imagenVSCode from '/src/imagenes/vscode.png';
import imagenVolar from '/src/imagenes/volar.jpg';
import imagenPrettier from '/src/imagenes/prettier.jpeg';
import inicioNode from '/src/imagenes/inicioNode.jpeg';
import botonDescargar from '/src/imagenes/botonDescargar.jpeg';
import botonMsi from '/src/imagenes/botonMsi.jpeg';
import archivoMsi from '/src/imagenes/archivoMsi.jpeg';

let imagen = ref("https://www.worldinside.com.ua/wp-content/uploads/2025/01/Vue.js-logo.webp");
</script>

<style scoped>
.contenedor {
  background-color: #ECECECFF;
  font-family: Arial, sans-serif;
  color:  #333;
  padding: 20px;
}

.contenedorInstalacion {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.imagenInstalacion {
  width: 550px;
  height: 500px;
  animation: imagenInstalacion 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

@keyframes imagenInstalacion {
  0% { transform: rotateY(0); }
  100% { transform: rotateY(360deg); }
}

.queEsInstalacion {
  flex: 1;
}

.queEsInstalacion h1 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 80px;
  margin-left: 80px;
}

.queEsInstalacion h2 {
  font-size: 29px;
  line-height: 40px;
  text-align: center;
}

.requisitos h1,
.extensiones h1,
.instalacionVue h1 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 70px;
  text-align: center;
  margin-bottom: 30px;
}

.listaRequisitos,
.listaExtensiones {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.requisitoNode{
  background-color: #35495e;
  width: 40%;
  border-radius: 20px;
  padding: 23px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.requisitoNode,
.requisitoVSCode{
  width: 40%;
}

.requisitoNode h1,
.requisitoVSCode h1{
  font-size: 40px;
  line-height: 30px;
  color: rgb(70, 66, 66);
}

.requisitoNode,
.requisitoVSCode,
.extensionVolar,
.extensionPrettier,
.pasosInstalacion {
  background-color: #41b883;
  border-radius: 20px;
  padding: 23px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.requisitoVSCode{
  background-color: #41b883;

}

.extensionPrettier {
  background-color: #35495e;
}
.requisitoNode img,
.requisitoVSCode img,
.extensionVolar img,
.extensionPrettier img {
  width: 500px;
  height: 300px;
  margin-bottom: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -21px;
}

h1 {
  font-size: 30px;
  margin-bottom: 10px;
  color: rgb(85, 85, 85);
}

h2 {
  font-size: 20px;
  line-height: 1.7;
  margin: 0;
  color: rgb(78, 75, 75);
  text-align: left;
}

code {
  background: #222;
  color: #41b883;
  padding: 2px 6px;
  border-radius: 6px;
  font-family: monospace;
}

.requisitoVSCode a,
.requisitoNode a{
  color:#35495e;
}

.contenedorPasoAPasoNode{
  background-color: rgb(202, 157, 178);
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  flex-direction: column;
  text-align: center;
}

.contenedorPasoAPasoNode h1{
  font-family: 'Times New Roman', Times, serif;
  font-size: 65px;
}

h3{
  font-size: 20px;
  line-height: 20px;
}

h4{
  font-size: 20px;
  margin-top: 230px;
  line-height: 20px;
}

.contenedorPasoAPasoNode img{
  width: 90%;
  height: auto;

}
</style>
