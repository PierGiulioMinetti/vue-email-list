// initializing vue
const app = new Vue({
    el: "#app",
    data: {
        email: [],
        nome: '',
    },
    created(){
      
            this.creaLista();
      
    },
    methods: {

        creaLista(){
            const self = this;
            for (let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response) {
            // handle success
            console.log(response.data.response);
            self.email.push(response.data.response);
        })
            .catch(function (error) {
            // handle error
            console.log(error);
            })

            } //end for loop
            self.email = [];
        } //end crea lista()
      
    }, //--> end method()


}); //--> end vue instance