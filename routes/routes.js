import Inicio from "../src/components/inicio.vue";
import Introduccion from "../src/components/introduccion.vue";
import Instalacion from "../src/components/instalacion.vue";
import { createRouter, createWebHashHistory } from "vue-router"
import Header from "../src/components/header.vue";
import componentes from "../src/components/componentes.vue";
import conceptos_basicos from "../src/components/conceptos_basicos.vue";
import recursos from "../src/components/recursos.vue";
import renderizado from "../src/components/renderizado.vue";
import uso_avanzado from "../src/components/uso_avanzado.vue";


const routes = [
    { path: "/", component: Inicio },
    {
        path: "/layout", component: Header, children: [
            { path: "introduccion", component: Introduccion },
            { path: "/introduccion", component: Introduccion },
            { path: "/instalacion", component: Instalacion },
            { path: "/componentes", component: componentes },
            { path: "/conceptos_basicos", component: conceptos_basicos },
            { path: "/recursos", component: recursos},
            { path: "/renderizado", component: renderizado},
            { path: "/uso_avanzado", component: uso_avanzado},
        ]
    },


]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})