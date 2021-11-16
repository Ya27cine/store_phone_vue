<template>

<div class="contaner">
      <div class="row">

        <div class="col-md-3 my-4" >
        <div class="container" >
          <ul class="list-group" id="menu-left">
              <li class="list-group-item active" aria-current="true">  <a @click="filtre_category('All')">All</a> </li>
            <li class="list-group-item">  <a @click="filtre_category('Samsung')">Samsung</a> </li>
            <li class="list-group-item"> <a @click="filtre_category('iPhone')">iPhone</a> </li>
            <li class="list-group-item"> <a @click="filtre_category('Redmi')">Redmi</a> </li>
            <li class="list-group-item"> <a @click="filtre_category('Huawei')">Huawei</a> </li>
            </ul>
        </div>
          
        </div>
        <div class="col-md-9 my-4">
            <div class="row" v-if="smartphonesView" >
                 <div class="col-md-3  mx-3 mb-3" v-for="s in smartphonesView"> 
                     <Smartphone  :data="s" />
                  </div>
             </div>
            
              <div v-else>
                  <h3> Loading ...</h3>
              </div>
        </div>
      </div>
  </div>
 
</template>

<script>

import Navbar from  './../components/Navbar';
import Smartphone from  './../components/Smartphone';
import Paginate from 'vuejs-paginate';


import axios from 'axios'

export default {
  components: { Smartphone, Navbar, Paginate},
    data() {
      return {
        smartphones: null,
        smartphonesView: null
     }
    },
  
    created() {
       axios.get("smartphones").then((rep) => {

              this.smartphones = rep.data['hydra:member'];
              //console.log(rep.data);
              this.smartphonesView = this.smartphones;
          })
    },

    methods: {
      filtre_category(marque){
          if(marque == "All")
            this.smartphonesView = this.smartphones;
          else
            this.smartphonesView =  Object.values(this.smartphones).filter( (el ) =>   el.Marque == marque)

          console.log(marque)
                    console.log(  this.smartphonesView )

      }
    },
  }

</script>
