// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.



const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "L'inizio di Vue.js",
            foto: "",
            secondMessage: ""
        }
    },
    methods:  {
        greet: function(){
            this.foto = `img/logo-napoli.png`
            this.secondMessage = `Io tifo Napoli tiè 🤘`
        }
    }
}).mount("#app");