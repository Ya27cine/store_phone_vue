<template >
<div class="card" style="width: 18rem;">
        <img src="https://www.chooseyourmobile.com/wp-content/uploads/2020/10/Vivo-X51-5G.jpg" class="card-img-top" alt="...">
        <div  class="card-body">
            <h5 class="card-title">{{ data.Marque}} {{ data.Name}}</h5>
            <p class="card-text">Some quick example text to build  </p>
            <h6> Quantity : <strong>{{ data.stockSmartphones.length }}</strong> </h6>

             <div v-if="data.stockSmartphones.length">
                    <h6> Prix : 
                            <strong> {{ prices.max }} &euro;
                                    <span v-if="prices.min">   -   {{ prices.min }}&euro;   </span>    
                            </strong>                
                    </h6>

                    <router-link :to="{name: 'Show', params:{id: data.id }}" class="btn btn-primary"   disabled>
                        Detail
                    </router-link>  
             </div>
             <div v-else>
                 <button type="button" class="btn btn-secondary btn-lg mb-3" disabled>Detail</button>
             </div>

               
          

        </div>
    </div>
</template>
<script>

import axios from 'axios';

export default {
    props: ['data'],

    data() {
        return {
            prices: []
        }
    },

    created() {

        axios.get("smartphones/"+this.data.id+"/stock_smartphones?properties[]=price").then( (rep) => {
           
            this.prices  = rep.data['hydra:member'].map( el  => el.price  );

             //console.log( this.prices )
             //console.log("---")

             this.prices = this.makePrice();
                              
        })
    },

    methods: {
            makePrice(){

                let max  = Math.max( ...this.prices );
                let min  = Math.min( ...this.prices );
                if( max == min ) return { max } 
                else  return { max, min }
            }
    },

}
</script>
<style lang="">
    
</style>