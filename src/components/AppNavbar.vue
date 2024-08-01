<template>
    <nav class="navbar">
        <h3>Amalyot</h3>
        <ul class="navbar-menu">
            <li><router-link to="/">Bosh saxifa</router-link></li>
            <li><router-link to="/help">Yordam</router-link></li>
            <li><a href="#" @click.prevent="open">Saidbar</a></li>
            <li><a href="#" @click.prevent="chiqish">Chiqish</a></li>
<!--            <li><router-link to="/sidebar">Saidbar</router-link></li>-->
<!--            <li><router-link to="/logout">Chiqish</router-link></li>-->
        </ul>
    </nav>
</template>

<script>
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default {
    name: "AppNavbar",
    setup() {
        const store = useStore()
        const router = useRouter()

        function chiqish () {
            store.commit('auth/logout')
            router.push('/login')
        }
        return{
            chiqish: chiqish,
            open: ()=> store.commit('setSidebar')
        }
    }

}
</script>

<style scoped>

</style>