<template>
  <div class="contenedor">
    <div class="contenedorInicio">
      <img :src="imagen" alt="Logo de Vue.js" class="imagenVue">
      <div class="queEsVue">
        <h1>¿QUÉ ES VUE?</h1>
        <h2>
          Vue es un framework, es decir, un conjunto de herramientas y reglas que nos permite crear 
          aplicaciones web modernas, rápidas y organizadas, con menos esfuerzo y más orden. Se puede usar 
          solo para una parte o para construir toda una aplicación.
        </h2>
      </div>
    </div>
    
    <div class="caracteristicasVue">
      <h1>CARACTERÍSTICAS PRINCIPALES</h1>
      <div class="caracteristicas">
        <div class="caracteristicaReactividad">
          <h1>Reactividad</h1>
          <h2>
            Es como si la pantalla fuera un espejo mágico . Si cambias un dato en tu código por ejemplo, 
            el nombre de un usuario, la página web se actualiza sola e instantáneamente para mostrar el cambio.
            No necesitas recargar ni presionar un botón.
            Por ejemplo: Si tienes una variable con el nombre del usuario y la cambias de "Ana" a "Pedro"
            en tu código, la página web que muestra el nombre del usuario mostrará "Pedro".
          </h2>
        </div>
        <div class="caracteristicaComponentes">
          <h1>Componentes</h1>
          <h2>Piensa en los componentes como las piezas de un kit de Lego. En lugar de construir 
            todo desde cero, creas bloques reutilizables como un botón o una tarjeta de producto que 
            puedes usar varias veces en diferentes partes de tu aplicación sin tener que repetir el código.
          </h2>
        </div>
        <div class="caracteristicaAprendizaje">
          <h1>Simplicidad y Facilidad de Aprendizaje</h1>
          <h2>Vue es una excelente opción para empezar porque se parece mucho a lo que ya sabes: 
            HTML, CSS y JavaScript. Puedes escribir tu código en un solo archivo, dividido en secciones
             claras, lo que hace que aprenderlo sea intuitivo y no te sientas abrumado.
          </h2>

        </div>
        <div class="caracteristicaEnlaceDatos">
          <h1>Enlace de Datos</h1>
          <h2>Es la forma en que Vue conecta la información de tu código con lo que el usuario ve
             en la pantalla. Puedes usar {{ }} para mostrar datos como el nombre de un usuario o 
             la directiva v-model para que los datos de un formulario se sincronicen automáticamente, 
             tanto si el usuario escribe algo como si tú cambias la variable en el código.
          </h2>
        </div>
        <div class="caracteristicaFlexibilidad">
          <h1>Flexibilidad</h1>
          <h2>Vue es muy flexible, y se adapta a tus necesidades. Puedes usarlo en un proyecto pequeño, 
            como para darle vida a un simple botón o formulario en una página web ya existente. 
            Pero también es lo suficientemente potente para construir aplicaciones grandes y complejas.</h2>
        </div>
        <div class="caracteristicaComunidad">
          <h1>Comunidad</h1>
          <h2>Vue tiene una comunidad grande y activa, lo que significa que es fácil encontrar ayuda, 
            ejemplos y soluciones a tus problemas. Además, cuenta con un gran ecosistema de herramientas, 
            librerías y extensiones listas para usar, que te permiten añadir funcionalidades avanzadas a 
            tu proyecto sin tener que empezar desde cero.</h2>
        </div>
      </div>
    </div>
    <div class="ventajasVue">
      <h1>VENTAJAS FRENTE A OTRAS HERRAMIENTAS</h1>
      <div class="ventajaDoc">
        <img :src="imagenVentajasDocumentacion" alt="Mi foto">
        <h1>BUENA DOCUMENTACIÓN</h1>
        <h2>Tiene guías muy claras y fáciles de seguir, lo que ayuda a aprender sin enredarse.</h2>
      </div>

      <div class="ventajaRapido">
        <img :src="imagenVentajasRapido" alt="Mi foto">
        <h1>LIGERO Y RÁPIDO</h1>
        <h2>Como ocupa poco espacio, las páginas hechas con Vue cargan más rápido en el navegador.</h2>
    </div>

      <div class="ventajaAprender">
        <img :src="imagenVentajasFacilAprender" alt="Mi foto">
        <h1>FÁCIL DE APRENDER</h1>
        <h2>No se necesita tanto conocimiento previo, su forma de trabajar se entiende rápido</h2>
      </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import imagenDocumentacion from '/src/imagenes/documentacion.png'; 
import imagenFacilAprender from '/src/imagenes/facilAprender.png'; 
import imagenRapido from '/src/imagenes/rapido.png'; 

  let imagen = ref("https://www.worldinside.com.ua/wp-content/uploads/2025/01/Vue.js-logo.webp");
  let imagenVentajasDocumentacion = ref(imagenDocumentacion);
  let imagenVentajasFacilAprender = ref(imagenFacilAprender); 
  let imagenVentajasRapido = ref(imagenRapido); 
  
  

</script>

<style scoped>
.contenedor{
  background-color: #ECECECFF;
}
.contenedor {
  font-family: Arial, sans-serif;
  color: #333;
  padding: 20px;
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

.ventajasVue h1,
.caracteristicasVue h1 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 70px;
  text-align: center;
  margin-bottom: 30px;
}

.caracteristicas {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.caracteristicaReactividad {
  background-color: #35495e;
  border-radius: 20px;
  padding: 23px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  width: 75%;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: 170px;
}

.caracteristicaAprendizaje{
  background-color: #35495e;
  border-radius: 20px;
  padding: 23px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  width: 75%;
  text-align: center;
  margin-left: 340px;
}

.caracteristicaComunidad h1,
.caracteristicaFlexibilidad h1,
.caracteristicaEnlaceDatos h1,
.caracteristicaAprendizaje h1,
.caracteristicaComponentes h1,
.caracteristicaReactividad h1 {
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 10px;
  color: white;
  line-height: 1.5;
}

.caracteristicaComunidad h2,
.caracteristicaFlexibilidad h2,
.caracteristicaEnlaceDatos h2,
.caracteristicaAprendizaje h2,
.caracteristicaComponentes h2,
.caracteristicaReactividad h2 {
  font-size: 20px;
  line-height: 1.5;
  margin: 0;
  color: white;
}

.caracteristicaComponentes{
  background-color: #41b883;
  border-radius: 20px;
  padding: 23px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  width: 75%;
  text-align: center;
}

.caracteristicaEnlaceDatos{
  background-color: #41b883;
  border-radius: 20px;
  padding: 23px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  width: 75%;
  text-align: center;
}

.caracteristicaFlexibilidad{
  background-color: #35495e;
  border-radius: 20px;
  padding: 23px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  width: 75%;
  text-align: center;
  margin-left: 340px;
}

.caracteristicaComunidad{
  background-color: #41b883;
  border-radius: 20px;
  padding: 23px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  width: 75%;
  text-align: center;
}

.ventajasVue {
  display: flex;
  flex-direction: column; 
}
.ventajaAprender,
.ventajaRapido,
.ventajaDoc {
  display: flex;
  flex-direction: column; 
  align-items: center; 
}

.ventajaDoc h1{
  font-size: 40px;
  margin-top: -870px;
}

.ventajaDoc h2{
  font-size: 20px;
  margin-top: 400px;
}

.ventajaRapido h1{
  font-size: 40px;
  margin-top: -900px;
}

.ventajaRapido h2{
  font-size: 20px;
  margin-top: 460px;
}

.ventajaAprender h1{
  font-size: 40px;
  margin-top: -600px;
}

.ventajaAprender h2{
  font-size: 20px;
  margin-top: 400px;
}

.ventajaAprender img,
.ventajaRapido img,
.ventajaDoc img{
  width: 95%;
}

</style>
