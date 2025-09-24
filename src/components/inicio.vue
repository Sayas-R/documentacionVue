<template>
  <div class="contenedor-principal">
    <div class="contenido-inicial">
      <h1 class="titulo-principal">Vue.js</h1>
      <p class="subtitulo">¡Bienvenido a tú manual de vue!</p>
      <button @click="ir()" class="boton-manual">
        Explorar Manual <span class="icono-flecha">→</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();

function ir() {
  router.push("/layout/introduccion");
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

.contenedor-principal {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #35495e 0%, #41b883 100%);
  font-family: 'Nunito', sans-serif;
  color: #ffffff;
  overflow: hidden;
  position: relative;
}

.contenedor-principal::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    url('data:image/svg+xml;utf8,<svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="10" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="15" fill="rgba(255,255,255,0.08)"/><circle cx="10" cy="90" r="8" fill="rgba(255,255,255,0.05)"/><circle cx="90" cy="10" r="12" fill="rgba(255,255,255,0.07)"/></svg>') repeat;
  background-size: 500px;
  opacity: 0.3;
  animation: movimientoFondo 30s linear infinite;
}

@keyframes movimientoFondo {
  from { background-position: 0 0; }
  to { background-position: -500px -500px; }
}

.contenido-inicial {
  text-align: center;
  padding: 60px 80px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 800px;
  transform: translateY(0);
  animation: deslizarArriba 1s ease-out forwards;
}

.titulo-principal {
  font-family: 'Nunito', sans-serif;
  font-size: 90px;
  font-weight: 700;
  letter-spacing: 8px;
  margin-bottom: 15px;
  color: #fff;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  animation: aparecerConEscala 1.2s ease-out forwards;
}

.subtitulo {
  font-size: 24px;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  animation: aparecer 1s ease-out 0.8s forwards;
}

.boton-manual {
  background-color: #ffffff;
  color: #35495e;
  border: none;
  padding: 18px 40px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  opacity: 0;
  animation: acercarConZoom 0.8s ease-out 1.5s forwards;
}

.boton-manual:hover {
  background-color: #f0f0f0;
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  color: #41b883;
}

.icono-flecha {
  font-size: 24px;
  transition: transform 0.3s ease;
}

.boton-manual:hover .icono-flecha {
  transform: translateX(5px);
}


@keyframes deslizarArriba {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes aparecerConEscala {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes aparecer {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes acercarConZoom {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>