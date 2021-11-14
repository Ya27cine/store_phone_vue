<template >
<div class="card" style="width: 18rem;">
        <img src="https://www.chooseyourmobile.com/wp-content/uploads/2020/10/Vivo-X51-5G.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ data.Marque}} {{ data.Name}}</h5>
            <p class="card-text">Some quick example text to build on the card title and make </p>
            <router-link :to="{name: 'Show', params:{id: 20 }}" class="btn btn-primary">Detail</router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: ['data'],
}
</script>
<style lang="">
    
</style>