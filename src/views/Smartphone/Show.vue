<template lang="">
    <div>
        <div v-if="smartphone" class="row my-2">
            <div class="col-md-10">
                <h2>{{ smartphone.Marque }} {{ smartphone.Name }}</h2>
                <p>
                    {{ smartphone.stockSmartphones }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios'
export default {
    props: ['id'],

    data() {
        return {
            smartphone: null
        }
    },
    created() {
        axios.get("smartphones/"+this.id).then( (rep) => {
            this.smartphone =  rep.data 

            console.log( rep.data)
        })
    },
}
</script>
<style lang="">
    
</style>