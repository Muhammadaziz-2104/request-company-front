<template>
    <app-navbar></app-navbar>
    <div class="container with-nav">
        <app-message></app-message>
        <router-view></router-view>
    </div>
    <app-sidebar></app-sidebar>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";
import AppMessage from "@/components/ui/AppMessage.vue";
import AppSidebar from "@/components/ui/AppSidebar.vue";

export default {
    name: "MainLayout",
    components: {AppSidebar, AppMessage, AppNavbar}
}
</script>

<style scoped>

</style>