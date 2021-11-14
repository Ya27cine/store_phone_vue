<template>
  <div class="home">
  <Navbar />
    <h2>Store Samphone</h2>
    <button @click="getData" class="btn btn-info"> Get Data </button>
<hr>
</div>
    <div class="row" v-if="smartphones" >
        <div class="col-md-4" v-for="s in smartphones"> 
              <ul>
                <li> {{ s.Marque }}  {{ s.Name }} [ {{ s.Model }}] </li>
              </ul>
                
             
          </div>
    </div>
    <div v-else>
      <h3> Loading ...</h3>
    </div>
  

 
</template>

<script>
import Navbar from './../components/Navbar.vue'
import axios from 'axios'

export default {
  components: { Navbar },
    data() {
      return {
        smartphones: null
     }
    },
    methods: {
      getData(){

          axios.get("smartphones").then((rep) => {

              this.smartphones = rep.data['hydra:member'];
              console.log(rep.data);
          })

      }
    },
  }

</script>
