<template>
    <div class="question" @click="active=!active ">
        <div class="question-title">{{question.title}}</div>
        <div class="question-body" v-if="active">{{question.answer}}</div>
    </div>
</template>

<script>

import {ref} from "vue";

export default {
    props:['question'],
    name: "AppQustions",
    setup() {
        const active = ref(false)

        return {
            active
        }
    }
}
</script>

<style scoped>
.question-title {
    margin-bottom: 5px;
}
</style>