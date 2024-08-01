<template>
    <span :class="['badge', className]">{{text}}</span>
</template>

<script>
import {ref, watch} from "vue";
// import {stat} from "@babel/core/lib/gensync-utils/fs";
export default {
    props:['type'],
    name: "AppStatus",
    setup(props) {
        const classMap = {
            active: 'primary',
            cancelled : 'danger',
            done: 'primary',
            sending: 'warning'
        }
        const TextMap = {
            active: 'Tastiqlanmoqda',
            cancelled: 'Qaytarildi',
            done: 'Bajarildi',
            sending: 'Yuborilmoqta'
        }
        watch(props, val => {
            className.value = classMap[val.type]
            text.value = TextMap[val.type]
        })
        const className = ref(classMap[props.type])
        const text = ref(TextMap[props.type])

         return {
             className,
             text
         }
    }
}
</script>

<style scoped>

</style>