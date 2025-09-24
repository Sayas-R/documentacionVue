<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="contenedorPrincipal text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="nombre">
            <span class="text-h6 text-weight-bold">Vue.js</span>
          </div>
        </q-toolbar-title>

        <q-space />

        <div class="pestañas q-gutter-x-md gt-xs">
          <q-btn flat label="Introducción" to="/introduccion" />
          <q-btn flat label="Instalación" to="/instalacion" />
          <q-btn flat label="Conceptos Básicos" to="/conceptos_basicos" />
          <q-btn flat label="Componentes" to="/componentes" />
          <q-btn flat label="Renderizado" to="/renderizado" />
          <q-btn flat label="Uso avanzado" to="/uso_avanzado" />
          <q-btn flat label="Recursos" to="/recursos" />
        </div>

      
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout'
})
</script>

<style scoped>
.contenedorPrincipal {
   background-image: linear-gradient(to right, #35495e, #41b883);
  height: 70px;
}
.nombre,
.pestañas{
  margin-top: 20px;
}
</style>