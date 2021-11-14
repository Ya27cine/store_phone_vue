<template >
<div class="card mx-4" style="width: 18rem;">
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.clipartpanda.com%2Fandroid-smartphone-clipart-k8156167.jpg&f=1&nofb=1" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">ROM{{ data.rom}}, RAM {{ data.ram}}</h5>
            <p class="card-text">Some quick example text to build on the card title and make </p>
            <router-link :to="{name: 'Show', params:{id: data.id }}" class="btn btn-primary">Detail</router-link>
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