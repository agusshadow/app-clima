Vue.component('busqueda', {
    data() {
        return {
            api: {
                key: `af127f59c01ee5ee16e6705d74b63a79`,
                keytom: `JWchzxsenApU5iNHdMRhQ7AsFZaOnEq3`,
            },
            valor: ``,
        }
    },
    template: `
            <div class="busqueda row sticky-top mx-3 pb-3">
                <div class="col-12 col-md-6 mx-auto">
                    <form class="d-flex pt-3 sticky-top mx-auto" @submit.prevent>
                        <input class="form-control border-0" type="text" placeholder="Busca por pais o ciudad" v-model="valor">
                        <button class="btn btn-primary ms-2" @click="buscar(valor)">Buscar</button>
                    </form>
                </div>
            </div>`,
    methods: {
        buscar(valor) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${valor}&appid=${this.api.key}&units=metric&lang=es`;
            let urlxdia = `https://api.openweathermap.org/data/2.5/forecast?q=${valor}&appid=${this.api.key}&units=metric&cnt=8&lang=es`
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.$emit('data', data);
                    localStorage.clima = JSON.stringify(data)
                    fetch(`https://api.tomtom.com/map/1/staticimage?key=${this.api.keytom}&center=${data.coord.lat},${data.coord.lon}&zoom=3&width=1000&height=1000`)
                        .then(response => {
                            if (response.status != 200) {
                                this.$emit('mapa', {estado: false, contenido: 'No se ha encontrado el mapa'});
                                localStorage.mapa = JSON.stringify({estado: false, contenido: 'No se ha encontrado el mapa'})
                            } else {
                                this.$emit('mapa', {estado: true, contenido: response.url});
                                localStorage.mapa = JSON.stringify({estado: true, contenido: response.url})
                            }    
                        })
                })
            fetch(urlxdia)
                .then(response => response.json())
                .then(data => {
                    this.$emit('dias', data);
                    localStorage.dias = JSON.stringify(data)
                })
            this.valor = "";
        },
    },
})