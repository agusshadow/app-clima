const app = new Vue({
    el: `#app`,
    data() {
        return {
            data: {},
            dias: {},
            ubicacion: {
                mapa: "",
                latitude: "",
                longitude: "",
            },
        }
    },
    mounted() {
        if (!localStorage.clima) {
            navigator.geolocation.getCurrentPosition((ubicacion)=> {
                this.ubicacion.longitude = ubicacion.coords.longitude
                this.ubicacion.latitude = ubicacion.coords.latitude

                fetch(`https://api.tomtom.com/map/1/staticimage?key=JWchzxsenApU5iNHdMRhQ7AsFZaOnEq3&center=${this.ubicacion.longitude},${this.ubicacion.latitude}&zoom=12&width=400&height=400`)
                .then(response => {
                this.ubicacion.mapa = {estado: true, contenido: response.url}
                })

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.ubicacion.latitude}&lon=${this.ubicacion.longitude}&appid=af127f59c01ee5ee16e6705d74b63a79&units=metric&lang=es`)
                .then(response => response.json())
                .then(data => this.data = data)  

                fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.ubicacion.latitude}&lon=${this.ubicacion.longitude}&appid=af127f59c01ee5ee16e6705d74b63a79&units=metric&cnt=8&lang=es`)
                .then(response => response.json())
                .then(data => this.dias = data)  

             }) 
        } else {
            this.data = JSON.parse(localStorage.clima)
            this.dias = JSON.parse(localStorage.dias)
            this.ubicacion.mapa = JSON.parse(localStorage.mapa)
        }
    },
})