<template>
    <div class="sidebar" v-if="sidebar">
        <span class="sidebar-close" @click="close">&times;</span>
        <div class="sidebar-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem consectetur ipsa laborum praesentium quasi ullam ut! Ab, accusamus aspernatur fuga illum iste nemo non, quae rem repellat rerum soluta.
        </div>
    </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
    name: "AppSidebar",
    setup() {
        const store = useStore()
        const sidebar = computed(()=> store.state.sidebar)

        return {
            sidebar,
            close: ()=> store.commit('clearSidebar')
        }
    }
}
</script>

<style scoped>
    .sidebar {
        position: fixed;
        width: 300px;
        height: 600px;
        right: 20px;
        top: 30px;
        bottom: 0;
        background: #fffcfc;
        border:5px solid #3eaf7c;
        z-index: 100;
        padding: .5rem;
        border-radius: 20px;
        background-image: url("https://img.freepik.com/free-vector/white-background-with-blue-tech-hexagon_1017-19366.jpg?w=2000");
        background-repeat: no-repeat;
        background-size: 500px 600px;
    }

    .sidebar-close {
        position: absolute;
        top: 10px;
        padding: 0 8px;
        border-radius: 50%;
        right: 20px;
        font-size: 1.5rem;
        cursor: pointer;
        border: 2px solid black;

    }

    .sidebar-content {
        margin-top: 70px;
        width: 80%;
        background-color: #92efc3;
        color: black;
        padding: 10px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

</style>