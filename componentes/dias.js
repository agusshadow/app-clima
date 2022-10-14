Vue.component('dias', {
    props: ['dias'],
    template: `<div class="row d-flex justify-content-center mx-3">
                    <div class="m-3 rounded-5 col-12 col-md-6 p-0">
                        <ul class="p-0 text-white">
                            <li v-for="dia in dias.list" class="dias rounded-4 p-3 d-flex mb-2 border">
                                <div class="d-flex align-items-center">
                                    <img class="img-dias img-fluid" :src="ruta(dia.weather[0].main)" alt="">
                                    <div>
                                        <p class="data-clima ps-4 m-0">{{ dia.dt_txt }}</p>
                                        <p class="data-clima ps-4 m-0">{{ dia.weather[0].description }}</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>`,
    methods: {
        ruta(valor) {
            return 'imagenes/' + valor.toLowerCase() + '.png'
        }
    },
})




                            