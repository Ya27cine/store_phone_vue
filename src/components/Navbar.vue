<template lang="">
    

  <nav class="navbar navbar-expand-sm navbar-dark bg-primary px-2">
   
    <router-link class="navbar-brand" :to="{ name: 'Home' }">Samphone</router-link>
   
    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
        
          <router-link class="nav-link" :to="{ name: 'Home' }">Home <span class="sr-only">(current)</span></router-link>
        
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Repair' }">Devis</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Accessoires</a>
          <div class="dropdown-menu" aria-labelledby="dropdownId">
            <a class="dropdown-item" href="#">Action 1</a>
            <a class="dropdown-item" href="#">Action 2</a>
          </div>
        </li>
      </ul>
     
    </div>
  </nav>

</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>