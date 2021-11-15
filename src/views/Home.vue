<template>

  <div class="row" v-if="smartphones" >

          <div class="col-md-3  mx-3 mb-3" v-for="s in smartphones"> 
              <Smartphone  :data="s" />
            </div>
      </div>
      <div v-else>
        <h3> Loading ...</h3>
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
              //console.log(rep.data);
          })
    },
  }

</script>
