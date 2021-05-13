const app= Vue.createApp({});


app.component('foco',{
    data(){
        return{
            status: false
        }
    },
    props:['lugar'],
    template: `
    <img :src="status ? 'focoOff.png': 'focoOn.png'"
     @click="status =!status">
     <p>{{lugar}}</p>
   `

});



const vm = app.mount('#app');