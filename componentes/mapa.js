Vue.component('mapa', {
    props: ["mapa"],
    template: `<div class="row mx-3 mt-3 d-flex justify-content-center rounded-4">
                    <img v-if="mapa.estado" :src="mapa.contenido" alt="mapa del lugar buscado" class="col-12 col-md-6 rounded-4 p-0 border img-fluid">  
                    <p v-else class="text-center pt-3 text-secondary">{{ mapa.contenido }}</p>
                </div>`,
})

