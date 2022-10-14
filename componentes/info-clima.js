Vue.component('info-clima', {
    props: ['data'],
    data() {
        return {
           vermas: false,
           fecha: '',
        }
    },
    template: `<div class="row d-flex justify-content-center mx-3">
                    <div class="info-clima col-12 col-md-6 text-white rounded-4 mt-2 px-4 py-4 border">
                        <div class="d-flex justify-content-between">
                            <h2 class="pb-3 texto-secundario">Ahora</h2>
                            <span class="data-clima">{{ fecha }}</span>
                        </div>
                        <div class="row text-center">
                            <div class="col-6 col-md-8 px-3 mb-4">
                                <h3 class="grados fw-bold texto-secundario">
                                    <p>{{ data.main.temp | number('0') }}°</p>
                                </h3>
                                <p class="data-clima text-start m-0">{{ data.weather[0].description }}</p>
                            </div>
                            <div class="col-6 col-md-4 px-3">
                                <img class="w-75" :src="ruta" alt="">
                            </div>  
                        </div>
                        <div class="row d-flex align-items-center">
                            <span class="ciudad h2 texto-secundario">{{ data.name }}</span>
                        </div>
                        <a href="#" class="fw-bold text-primary text-decoration-none d-block mt-1 text-end" @click="switchVerMas()">{{ vermas ? 'ver menos' : 'ver mas' }}</a>
                        <transition name="fade">
                            <div v-if="vermas">
                                <div class="pb-1 pt-4">
                                    <p class="fs-5 data-clima">Min {{ data.main.temp_min | number('0')  }}° | Max {{ data.main.temp_max | number('0')  }}°</p>
                                </div>
                                <div class="">
                                    <p class="fs-5 data-clima">Humedad {{ data.main.temp_min | number('0')  }}%</p>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>`,
    methods: {
        switchVerMas() {
            this.vermas = !this.vermas
        },
    },
    computed: {
        ruta() {
            valor = this.data.weather[0].main.toLowerCase()
            return 'imagenes/' + valor + '.png'
        }
    },
    mounted() {
        let hoy = new Date();
        let ahora = hoy.toLocaleDateString('en-US')
        this.fecha = ahora
    },
})