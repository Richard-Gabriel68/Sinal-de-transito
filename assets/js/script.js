let luz = {
    data: function (){
        return {
            
        }
    },
    props: [ 'cor'],
    template: `
    <div class="luz"> </div>
    `
}



Vue.component('farol', {
    components: {
        luz
    },
    props: ['status'],
    methods: {
        lib: function(){
            this.$emit('liberar')
        },
        fec: function(){
            this.$emit('fechar')
        }
    },
    template: `
    <div class="farol">
        <template v-if = "status == 'red'">
            <luz class="red"/>
            <luz />
            <luz />
        </template>
        
        <template v-else-if = "status == 'yellow'" >
            <luz />
            <luz class="yellow"/>
            <luz />
        </template>

        <template v-else-if = "status == 'green'" >
            <luz />
            <luz />
            <luz class="green"/>
        </template>

        <div class="controle">
            <button @click="lib">Liberar</button>
            <button @click="fec">Fechar</button>
        </div>
    </div>
    `
})

let app = new Vue ({
    el: '#app',
    data: {
        luzStatus: 'red'
    },
    methods: {
        liberar: function(){
          this.luzStatus = 'green'  
        },
        fecharSinal: function(){
            this.luzStatus = 'red'
        },
        fechar: function(){
            this.luzStatus = 'yellow'

            setTimeout(this.fecharSinal, 2000)

        }
        

    },
})