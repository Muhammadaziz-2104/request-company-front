<template>
    <router-link to="/" v-if="back" class="btn primary">Bosh saxifaga qaytish</router-link>
    <div class="card">
        <h1 class="card-title">
            {{title}}
            <slot name="header"></slot>
        </h1>
        <slot></slot>

    </div>
</template>

<script>
export default {
    name: "AppPage",
    props:['title', 'back'],
    setup(props){
        document.title = `${props.title} | Amalyot`
    }
}
</script>

<style scoped>
    .btn{
        top: 10px;
    }
</style>