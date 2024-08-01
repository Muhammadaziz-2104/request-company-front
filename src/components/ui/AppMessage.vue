<template>
<div :class="['alert',message.status]" v-if="message">
    <p class="alert-title">{{ title }}</p>
    <p>{{message.text}}</p>
    <span class="alert-close" @click="clear">&times;</span>
</div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
    name: "AppMessage",
    setup() {
        const store = useStore()
        const message = computed(()=> store.state.message)

        const Title_map = {
            primary: 'Muvaffaqyatli bajarildi',
            danger:'Xatolik',
            warning: 'Ogoxlantirish',
        }

        const title = computed( () => message.value.status ? Title_map[message.value.status] : null)

        return {
            message,
            title,
            clear: ()=>store.commit('clearMessage')
        }
    }
}
</script>

<style scoped>

</style>