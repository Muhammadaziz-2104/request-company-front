<template>
    <div class="telefon" @click="ochil" v-if="massage" ></div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
    name: "AppSidebarCall",
    setup() {
        const store = useStore()
        const massage = computed(()=>store.state.massageCall)
        return {
            massage,
            ochil:()=> store.commit('setSidebar')
        }
    }
}
</script>

<style scoped>
    .telefon {
        position: fixed;
        width: 60px;
        height: 60px;
        right: 60px;
        cursor: pointer;
        bottom: 30px;
        background: #fffcfc;
        border:3px solid #3eaf7c;
        z-index: 100;
        padding: .5rem;
        border-radius: 50px;
        background-image: url("https://cdn3d.iconscout.com/3d/premium/thumb/messages-6546345-5376608.png");
        background-repeat: no-repeat;
        background-size: 40px;
        background-position: 8px 8px;
        transition: all .5s;
    }
    .telefon:hover {
        transform: scale(1.2);
    }
</style>