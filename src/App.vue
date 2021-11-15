<template>
  <Navbar />
  <div class="contaner">
      <div class="row">

        <div class="col-md-3 my-4" >
        <div class="container" >
          <ul class="list-group" id="menu-left">
              <li class="list-group-item active" aria-current="true">ALL</li>
            <li class="list-group-item"> <a href="">Samsung</a> </li>
            <li class="list-group-item"> <a href="">Apple</a> </li>
            <li class="list-group-item"> <a href="">Huawei</a> </li>
            <li class="list-group-item"> <a href="">Redmi</a> </li>
            </ul>
        </div>
          
        </div>
        <div class="col-md-9 my-4">
          <router-view/>
        </div>


      </div>
  </div>
  <Footer />

</template>

<script>
import Navbar from  './components/Navbar';
import Footer from  './components/Footer';


export default {
  components:{
    Navbar, Footer
  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


#menu-left{/*
  position: fixed;
  height: 100%;
  width: 20%;*/
}


</style>
