<template>
    <component :is="layout + '-layout'" v-if="layout"></component>
</template>
<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import {computed} from "vue";
import { useRoute} from "vue-router";

export default  {
  setup(){
    const route = useRoute()

    return{
        layout: computed(()=> route.meta.layout)
      }
  },
  components:{
    AuthLayout,
    MainLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
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
</style>
