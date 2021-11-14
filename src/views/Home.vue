<template>

  <div class="container">
  <div class="row" v-if="smartphones" >
        <h2 class="my-2">Store Samphone</h2>
          <div class="col-md-3 my-2" v-for="s in smartphones"> 
              <Smartphone  :data="s" />
            </div>
      </div>
      <div v-else>
        <h3> Loading ...</h3>
      </div>
    
  </div>
   

 
</template>

<script>

import Navbar from  './../components/Navbar';
import Smartphone from  './../components/Smartphone';


import axios from 'axios'

export default {
  components: { Smartphone, Navbar},
    data() {
      return {
        smartphones: null
     }
    },
  
    created() {
       axios.get("smartphones").then((rep) => {

              this.smartphones = rep.data['hydra:member'];
              console.log(rep.data);
          })
    },
  }

</script>
