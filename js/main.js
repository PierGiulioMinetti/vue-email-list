// initializing vue
const app = new Vue({
    el: "#app",
    data: {
        email: [],
        nome: '',
    },
    created(){
        // this reference
       const self = this;

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response) {
          console.log(response.data.response);
            self.nome = response.data.response;
        })
        .catch(function (error) {
         
          console.log(error);
        }) //end axios
      
      
    },
    method: {
      
    }, //--> end method()


}); //--> end vue instance