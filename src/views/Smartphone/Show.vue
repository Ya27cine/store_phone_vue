<template lang="">
    <div>
        <div v-if="variants" class="row my-2">
            <h2 v-if="smartphone" >{{ smartphone.Marque }} {{ smartphone.Name }}</h2>
            <div class="col-md-3"  v-for=" i in variants">           
                <Variant  :data="i" />
            </div>
                       
        </div>
        <div v-else>
            <h2> Loading ....</h2>
        </div>
    </div>
   
</template>
<script>

import axios from 'axios'
import Variant from './../../components/Variant.vue'

export default {
    props: ['id'],
    components:{
        Variant
    },
    data() {
        return {
            smartphone: [],
            variants: []
        }
    },
    created() {
        this.getSmartphone();
        this.getAllVariant()
    },

    methods: {
        async getAllVariant(){
            await axios.get("smartphones/"+this.id+"/stock_smartphones").then( (rep) => {        
                // console.log(rep.data['hydra:member'])
                this.variants = rep.data['hydra:member']             
            })
        },   
        
        async getSmartphone(){
            await axios.get("smartphones/"+this.id).then( (rep) => {                 
                console.log(rep.data)
                this.smartphone = rep.data                
            })
        },    
    }
}
</script>
<style lang="">
    
</style>