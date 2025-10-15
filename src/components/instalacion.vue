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
        </div>
      </div>
    </div>


    <q-card class="contenedorIntalacion">
      <h1 class="text-h3 text-weight-bold text-deep-black-10 text-center q-mb-xl">
        GUÍA DE INSTALACIÓN PASO A PASO (Windows) 
      </h1>
      
      <q-list bordered class="rounded-borders q-mb-xl">
        <q-toolbar class="vue-gradient-toolbar text-white shadow-2">
          <q-icon name="" size="md" class="q-mr-sm" />
          <q-toolbar-title class="text-h5">
            PASOS PARA INSTALAR NODE.JS
          </q-toolbar-title>
        </q-toolbar>

        <q-expansion-item
          v-for="(paso, index) in pasosNode"
          :key="index"
          :label="`${index + 1}. ${paso.titulo}`"
          expand-separator
          header-class="text-h6 text-dark-vue text-weight-medium bg-grey-2"
          class="q-mb-sm"
        >
          <q-card>
            <q-card-section class="text-body1 text-grey-8 text-center">
              <p>{{ paso.descripcion }}</p>
              <div v-if="paso.imagenes" class="q-mt-md">
                <q-img
                  v-for="(imgSrc, imgIndex) in paso.imagenes"
                  :key="imgIndex"
                  :src="imgSrc.src"
                  :alt="imgSrc.alt"
                  class="img-paso"
                  :class="{'q-mb-md': imgIndex < paso.imagenes.length - 1}"
                  style="width: 90%; margin: 20px auto; display: block;"
                />
              </div>
              <p v-if="paso.comando" class="q-mt-md text-center">
                <q-chip color="secondary" text-color="black" icon="code">
                  {{ paso.comando }}
                </q-chip>
              </p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

      <q-list bordered class="rounded-borders q-mb-xl">
        <q-toolbar class="vue-gradient-toolbar text-white shadow-2">
          <q-icon name="" size="md" class="q-mr-sm" />
          <q-toolbar-title class="text-h5">
            PASOS PARA INSTALAR Y CONFIGURAR VISUAL STUDIO CODE (VS Code)
          </q-toolbar-title>
        </q-toolbar>

        <q-expansion-item
          v-for="(paso, index) in pasosVSCode"
          :key="index"
          :label="`${index + 1}. ${paso.titulo}`"
          expand-separator
          header-class="text-h6 text-dark-vue text-weight-medium bg-grey-2"
          class="q-mb-sm"
        >
          <q-card>
            <q-card-section class="text-body1 text-grey-8 text-center">
              <p>{{ paso.descripcion }}</p>
              <div v-if="paso.imagenes" class="q-mt-md">
                <q-img
                  v-for="(imgSrc, imgIndex) in paso.imagenes"
                  :key="imgIndex"
                  :src="imgSrc.src"
                  :alt="imgSrc.alt"
                  class="img-paso"
                  :class="{'q-mb-md': imgIndex < paso.imagenes.length - 1}"
                  style="width: 90%; margin: 20px auto; display: block;"
                />
              </div>
              <p v-if="paso.comando" class="q-mt-md text-center">
                <q-chip color="secondary" text-color="black" icon="code">
                  {{ paso.comando }}
                </q-chip>
              </p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

      <q-list bordered class="rounded-borders q-mb-xl">
        <q-toolbar class="vue-gradient-toolbar text-white shadow-2">
          <q-icon name="" size="md" class="q-mr-sm" />
          <q-toolbar-title class="text-h5">
            VINCULAR NODE.JS CON VISUAL STUDIO CODE
          </q-toolbar-title>
        </q-toolbar>

        <q-expansion-item
          v-for="(paso, index) in pasosVinculacion"
          :key="index"
          :label="`${index + 1}. ${paso.titulo}`"
          expand-separator
          header-class="text-h6 text-dark-vue text-weight-medium bg-grey-2"
          class="q-mb-sm"
        >
          <q-card>
            <q-card-section class="text-body1 text-grey-8 text-center">
              <p>{{ paso.descripcion }}</p>
              <div v-if="paso.imagenes" class="q-mt-md">
                <q-img
                  v-for="(imgSrc, imgIndex) in paso.imagenes"
                  :key="imgIndex"
                  :src="imgSrc.src"
                  :alt="imgSrc.alt"
                  class="img-paso"
                  :class="{'q-mb-md': imgIndex < paso.imagenes.length - 1}"
                  style="width: 90%; margin: 20px auto; display: block;"
                />
              </div>
              <p v-if="paso.comando" class="q-mt-md text-center">
                <q-chip color="secondary" text-color="black" icon="code">
                  {{ paso.comando }}
                </q-chip>
              </p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

      <q-list bordered class="rounded-borders q-mb-xl">
        <q-toolbar class="vue-gradient-toolbar text-white shadow-2">
          <q-icon name="" size="md" class="q-mr-sm" />
          <q-toolbar-title class="text-h5">
            CREAR UN PROYECTO EN VUE
          </q-toolbar-title>
        </q-toolbar>

        <q-expansion-item
          v-for="(paso, index) in pasosVue"
          :key="index"
          :label="`${index + 1}. ${paso.titulo}`"
          expand-separator
          header-class="text-h6 text-dark-vue text-weight-medium bg-grey-2"
          class="q-mb-sm"
        >
          <q-card>
            <q-card-section class="text-body1 text-grey-8 text-center">
              <div v-html="paso.descripcion"></div>
              <div v-if="paso.imagenes" class="q-mt-md">
                <q-img
                  v-for="(imgSrc, imgIndex) in paso.imagenes"
                  :key="imgIndex"
                  :src="imgSrc.src"
                  :alt="imgSrc.alt"
                  class="img-paso"
                  :class="{'q-mb-md': imgIndex < paso.imagenes.length - 1}"
                  style="width: 90%; margin: 20px auto; display: block;"
                />
              </div>
              <p v-if="paso.comando" class="q-mt-md text-center">
                <q-chip color="secondary" text-color="black" icon="code">
                  {{ paso.comando }}
                </q-chip>
              </p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

    </q-card>

    <div class="extensiones">
      <h1>EXTENSIONES RECOMENDADAS DE VS CODE</h1>
      <div class="listaExtensiones">
      <q-card class="my-card">
        <q-img :src="extensionVolar" alt=""/><br>
        <q-img :src="ejemploExtensionVolar" alt=""><br>
        <div class="absolute-bottom text-h6">
          Volar (Vue Language Features - Volar):
        </div>
      </q-img>
      <q-card-section >
        Es una extensión para trabajar correctamente con Vue 3. Le permite al visual entender como está 
        estructurado un archivo .vue, reconocer cada parte como lo es HTML, CSS y JavaScript y mostrarla
        con diferentes colores para que el código sea más fácil de leer. También, permite 
        autocompletado y ayuda a detectar errores mientras se escribe.
        Gracias a esta extensión, visual studio code puede leer, entender y mostrar correctamente todo 
        el código. 
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-img :src="extensionTypeScript" alt=""/><br>
      <q-img :src="ejemploExtensionTypeScript" alt=""><br>
      <div class="absolute-bottom text-h6">
        TypeScript Vue Plugin (Volar):
      </div>
    </q-img>
      <q-card-section >
        Es el complemento perfecto para la extensión volar. Asegura que el Visual Studio Code funcione
        correctamente con Vue, incluso si se usa JavaScript, garantizando la detección de errores y 
        un autocompletado inteligente estable
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-img :src="extensionPrettier" alt=""/><br>
      <q-img :src="ejemploExtensionTypeScript" alt=""><br>
      <div class="absolute-bottom text-h6">
        Prettier - Code Formatter:
      </div>
    </q-img>
      <q-card-section >
        Es una extensión muy útil que ordena y acomoda el código automáticamente.
        Cuando se guarda un archivo, corrige cosas como los espacios, las sangrías y las comillas
        para que todo quede bien presentado.
        Gracias a esto, el código se ve más limpio y organizado, lo que ayuda a leerlo y entenderlo mejor.
      </q-card-section>
    </q-card>

      </div> 
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { QCardSection, QIcon } from 'quasar'

import imagenNode from '/src/imagenes/node.png';
import imagenVSCode from '/src/imagenes/vscode.png';
import inicioNode from '/src/imagenes/inicioNode.jpeg';
import botonDescargar from '/src/imagenes/botonDescargar.jpeg';
import botonMsi from '/src/imagenes/botonMsi.jpeg';
import archivoMsi from '/src/imagenes/archivoMsi.jpeg';
import imagenInicioInstalarNode from '/src/imagenes/inicioInstalarNode.png';
import imagenInstalarNode from '/src/imagenes/instalarNode.jpeg';
import cmd from '/src/imagenes/cmd.jpeg';
import comandosCmd from '/src/imagenes/comandosCmd.png';
import inicioVisual from '/src/imagenes/inicioVisual.jpeg';
import botonDescargarVisual from '/src/imagenes/botonDescargarVisual.jpeg';
import archivoVisual from '/src/imagenes/archivoVisual.jpeg';
import cmdVue from '/src/imagenes/cmdVue.jpeg';
import comandosCmdVue from '/src/imagenes/comandosCmdVue.jpeg';
import nuevaVentanaVisual from '/src/imagenes/nuevaVentanaVisual.jpeg';
import vinculacionNodeVisual from '/src/imagenes/vinculacionNodeVisual.jpeg';
import terminal from '/src/imagenes/terminal.png';
import comandosNodeVisual from '/src/imagenes/comandosNodeVisual.jpeg';
import crearProyectoVue from '/src/imagenes/crearProyectoVue.png';
import framework from '/src/imagenes/framework.png';
import lenguaje from '/src/imagenes/lenguaje.png';
import noUsoHerramienta from '/src/imagenes/noUsoHerramienta.png';
import npmInstalacionProyecto from '/src/imagenes/npmInstalacionProyecto.png';
import comandosIniciarProyecto from '/src/imagenes/comandosIniciarProyecto.jpeg';
import direccion from '/src/imagenes/direccion.jpeg';
import paginaVue from '/src/imagenes/paginaVue.png';
import extensionVolar from '/src/imagenes/extensionVolar.png';
import ejemploExtensionVolar from '/src/imagenes/ejemploExtensionVolar.png';
import extensionTypeScript from '/src/imagenes/extensionTypeScript.png';
import ejemploExtensionTypeScript from '/src/imagenes/ejemploExtensionTypeScript.png';
import extensionPrettier from '/src/imagenes/extensionPrettier.png';


let imagen = ref("https://www.worldinside.com.ua/wp-content/uploads/2025/01/Vue.js-logo.webp");

const pasosNode = [
  {
    titulo: 'Abre el navegador y ve a https://nodejs.org',
    descripcion: '',
    imagenes: [{ src: inicioNode, alt: 'Inicio de Node' }],
  },
  {
    titulo: 'Descarga el instalador para Windows (.msi)',
    descripcion: 'Luego, ve a la pestaña "Descargar" y oprime el botón que dice "Instalador de Windows(.msi)". Automáticamente se descargará un archivo que finaliza en .msi.',
    imagenes: [
      { src: botonDescargar, alt: 'Botón descargar' },
      { src: botonMsi, alt: 'Botón Msi' },
      { src: archivoMsi, alt: 'Archivo Msi' },
    ],
  },
  {
    titulo: 'Ejecuta el instalador y sigue los pasos por defecto',
    descripcion: 'Abre el archivo, deja las opciones por defecto, acepta el acuerdo de licencia y le das instalar.',
    imagenes: [
      { src: imagenInicioInstalarNode, alt: 'Inicio para configurar Node' },
      { src: imagenInstalarNode, alt: 'Instalar Node' },
    ],
  },
  {
    titulo: 'Verifica la instalación de Node.js y npm',
    descripcion: 'Una vez que termine la instalación, prueba que realmente se instaló por la "Terminal (cmd)" o "PowerShell" siguiendo los comandos. Si ves que te muestra un número de versión (ej. v18.17.1), quiere decir que se instaló correctamente.',
    imagenes: [
      { src: cmd, alt: 'Imagen de búsqueda de la terminal' },
      { src: comandosCmd, alt: 'Comandos para verificar instalación de Node' },
    ],
    comando: 'node -v | npm -v',
  },
];

const pasosVSCode = [
  {
    titulo: 'Abre el navegador y ve a https://code.visualstudio.com/',
    descripcion: 'La página debería detectar si usas Windows, Mac o Linux y mostrarte el botón de descarga grande y azul para tu sistema. Haz clic en él para descargar el archivo instalador.',
    imagenes: [
      { src: inicioVisual, alt: 'Inicio de Visual' },
      { src: botonDescargarVisual, alt: 'Instalar Visual' }
    ],
  },
  {
    titulo: 'Ejecuta el instalador y marca la opción "Add to PATH"',
    descripcion: 'Automáticamente se descargará un archivo, debes abrirlo, aceptar el acuerdo de licencia. Cuando llegues a la pantalla de opciones, asegúrate de que la opción que dice "Add to PATH" esté marcada, luego clic en instalar y finalizar.',
    imagenes: [
      { src: archivoVisual, alt: 'Archivo de visual' }
    ],
  },
  {
    titulo: 'Verifica la instalación con el comando "code ." ',
    descripcion: 'Para verificar que se instaló correctamente abrimos la terminal "cmd" o "PowerShell" y escribimos el comando "code .".',
    imagenes: [
      { src: cmdVue, alt: 'Imagen de búsqueda de la terminal' },
      { src: comandosCmdVue, alt: 'Comandos para verificar instalación de Visual' }
    ],
    comando: 'code .',
  },
  {
    titulo: 'Verifica que se abra la nueva ventana de VS Code',
    descripcion: 'Automáticamente debe abrirse una ventana de Visual Studio Code y si es así, significa que está instalado y configurado correctamente, listo para empezar a programar.',
    imagenes: [
      { src: nuevaVentanaVisual, alt: 'Imagen de la nueva ventana que abre visual' }
    ],
  },
];

const pasosVinculacion = [
  {
    titulo: 'Abre la Terminal en Visual Studio Code',
    descripcion: 'Abre Visual Studio Code y ve al menú (...) en la parte superior izquierda, haz clic donde dice "Terminal" y luego en "New Terminal".',
    imagenes: [
      { src: vinculacionNodeVisual, alt: 'Imagen de vinculación de node y visual' }
    ],
  },
  {
    titulo: 'Confirma que la terminal está abierta',
    descripcion: 'Automáticamente se abre la terminal en la parte inferior y es donde vamos a escribir los comandos para trabajar con Vue y Node.',
    imagenes: [
      { src: terminal, alt: 'Imagen de la terminal en visual' }
    ],
  },
  {
    titulo: 'Verifica que Node y NPM sean accesibles',
    descripcion: 'Ahora, vamos a ver si puede encontrar a Node.js y a NPM. Si los encuentra, te dirá su número de versión (por ejemplo: v20.9.0). Esto confirma que VS Code sabe dónde está Node.js y que la conexión es exitosa. Para esto, escribiremos los siguientes comandos:',
    imagenes: [
      { src: comandosNodeVisual, alt: 'Imagen de la terminal con comandos' }
    ],
    comando: 'node -v | npm -v',
  },
];


const pasosVue = [
  {
    titulo: 'Crear una carpeta para el proyecto',
    descripcion: `
      Antes de empezar, debemos crear una carpeta donde vamos a guardar el proyecto. Para esto, tenemos dos opciones:<br><br>
      - La primera opción consiste en usar el explorador de archivos de Windows para crear la carpeta. Luego, en Visual Studio Code, selecciona Archivo (File) y luego abrir carpeta (Open Folder) para seleccionar la que creaste.<br><br>
      - La segunda opción consiste en abrir la terminal en VS Code y usar los siguientes comandos:<br>
      <code>mkdir proyectos-vue</code> (Crea la carpeta, puedes cambiar el nombre)<br>
      <code>cd proyectos-vue</code> (Accede a la carpeta)
      `,
    imagenes: null,
  },
  {
    titulo: 'Ejecuta el comando de creación de proyecto de Vue',
    descripcion: 'Después de crear y acceder a la carpeta, creamos el proyecto de Vue. Escribiremos el siguiente comando:',
    comando: 'npm create vue@latest',
    imagenes: null,
  },
  {
    titulo: 'Responde a las preguntas del sistema 1',
    descripcion: 'Te preguntará cómo quieres que se llame tu proyecto y vas a escribir el nombre que desees, por ejemplo, "proyectos_vue".',
    imagenes: [{ src: crearProyectoVue, alt: 'Imagen del comando para crear proyecto' }],
  },
  {
    titulo: 'Responde a las preguntas del sistema 2 - Selección de Framework',
    descripcion: 'Como estamos construyendo un proyecto de Vue 3, debes usar las flechas de tu teclado para moverte hacia abajo hasta que la opción "Vue" tenga el punto verde, y luego presionar Enter.',
    imagenes: [{ src: framework, alt: 'Imagen de selección de framework' }],
  },
  {
    titulo: 'Responde a las preguntas del sistema 3 - Selección de Lenguaje',
    descripcion: 'Nos pregunta cuál lenguaje queremos usar y nos vamos a asegurar de marcar la opción JavaScript ya que es el lenguaje base de Vue y es más sencillo de aprender.',
    imagenes: [{ src: lenguaje, alt: 'Imagen de selección del lenguaje que vamos a usar' }],
  },
  {
    titulo: 'Responde a las preguntas del sistema 4 - Herramienta Experimental',
    descripcion: 'Nos pregunta si deseamos usar la herramienta experimental rolldown-vite y le damos Enter diciendo que NO ya que es lo más recomendable al iniciar.',
    imagenes: [{ src: noUsoHerramienta, alt: 'Imagen de no usar herramienta' }],
  },
  {
    titulo: 'Responde a las preguntas del sistema 5 - Instalación con NPM',
    descripcion: 'Luego, nos pregunta si queremos instalar con npm y empezar ahora. Le decimos que Sí porque es la mejor y más rápida opción. Al elegir Sí, la herramienta Vite instalará automáticamente todas las piezas de Vue 3 y Vite de una sola vez. Si hubieras respondido No, tendrías que ejecutar manualmente los siguientes comandos, uno por uno: <code>cd proyectos-vue</code>, <code>npm install</code>, y <code>npm run dev</code>.',
    imagenes: [
      { src: npmInstalacionProyecto, alt: 'Imagen de la instalación con npm' },
      { src: comandosIniciarProyecto, alt: 'Imagen de los comandos para iniciar proyecto' }
    ],
  },
  {
    titulo: 'Inicia el servidor y abre el proyecto en el navegador',
    descripcion: 'Una vez que el servidor está encendido y veas la dirección le das clic, por ejemplo: <code>http://localhost:5174/</code>. Esto te llevará a tu página Vue y si todo está bien inicialmente te mostrará la página de bienvenida.',
    imagenes: [
      { src: direccion, alt: 'Imagen dirección para abrir página' },
      { src: paginaVue, alt: 'Imagen página inicial de vue' }
    ],
  },
];
</script>

<style scoped>
.vue-gradient-toolbar {
  background: linear-gradient(to right, #41B883, #35495E);
}

.contenedor {
  background-color: #ECECECFF;
  font-family: Arial, sans-serif;
  color:  #333;
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
}
.contenedorPasoAPasoNode h2{
  font-size: 20px;
  line-height: 1.7;
  margin: 0;
  color: rgb(78, 75, 75);
  width: 90%;
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
  background-color: rgb(107, 107, 107);
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  flex-direction: column;
  text-align: center;
  gap: 40px;
  align-items: center;
}

.contenedorPasoAPasoNode h1{
  font-family: 'Times New Roman', Times, serif;
  font-size: 65px;
}

h3{
  color: rgb(53, 50, 50);
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

.pasosInstalacion h2{
  display: block; 
  width: 90%; 
  margin: 0 auto; 
}

.pasosInstalacion img{
  display: block; 
  width: 90%; 
  margin: 0 auto; 
}
.my-card{
  width: 40%;
  height: 700px;
}

</style>