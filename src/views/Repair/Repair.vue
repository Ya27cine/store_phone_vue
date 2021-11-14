<template lang="">
    <div>
        <h2 class="my-3">
            Reparations 
        </h2>

        <div v-if="display_menu" class="row">
            <div @click="menu_toggle('sm')" class="col-md-3"> <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjdnunez.com%2Fimages%2Fnews%2F2016%2FSamsung-Logo.png&f=1&nofb=1" alt=""> </div>
            <div @click="menu_toggle('ip')" class="col-md-3"> <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F256x256%2F2016%2F11%2F24%2F856497_apple_512x512.png&f=1&nofb=1" alt=""></div>
            <div @click="menu_toggle('hw')" class="col-md-3"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Mh-o4SUjNtZ1ZKyWfzljrAD6D6%26pid%3DApi&f=1" alt=""> </div>
            <div @click="menu_toggle('mi')" class="col-md-3"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fxiaomi-logo-png-xiaomi-mi-fit-logo-300.png&f=1&nofb=1" alt=""> </div>
        </div>

        <div v-if="display_sm" >
            <h1>Smasung</h1>
        </div>
        <div v-if="display_ip" >
            <h1>iPhone</h1>
        </div>
        <div v-if="display_mi" >
            <h1>Redmi</h1>
        </div>
        <div v-if="display_hw">
            <h1>Huawei</h1>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            display_menu: true,
            display_sm: false,
            display_ip: false,
            display_hw: false,
            display_mi: false,
        }
    },

    methods: {
        menu_toggle(action){
            
            switch (action) {
                case 'sm':
                    this.display_sm = true
                    break;
                case 'ip':
                    this.display_ip = true
                    break;
                case 'mi':
                    this.display_mi = true
                    break;
                case 'hw':
                    this.display_hw = true
                    break;
            
                default:
                    break;
            }
            this.display_menu = false;
        }
    },
    
}
</script>
<style lang="">
    
</style>