<template>
    <div class="container">
        <app-message></app-message>

        <div class="card">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AppMessage from "@/components/ui/AppMessage.vue";

export default {
    name: "AuthLayout",
    components: {AppMessage}
}
</script>

<style scoped>

</style>