<template>
    <div class="filter">
        <div class="form-control">
            <input v-model="name" type="text" placeholder="Fio" >
            <input v-model="phone" type="text" placeholder="Telni" >
            <select v-model="status">
                <option disabled selected> Tanlang.... </option>
                <option value="done">Bajarilmoqta</option>
                <option value="cancelled">Qaytarildi</option>
                <option value="active">Tastiqlanmoqta</option>
                <option value="sending">Yuborilmoqta</option>
            </select>
        </div>
        <div class="form-control">
            <button v-if="isActive" @click="reset" class="btn primary">Tozalash</button>
        </div>
    </div>
</template>

<script>
import {computed, ref, watch} from "vue";
export default  {
    emits:['update:modelValue'],
    props:['modelValue'],
    name: "RequestFilter",
    setup(_,{emit}) {
        const name = ref()
        const phone = ref()
        const status = ref()
        const isActive = computed(()=> name.value || phone.value || status.value )

        watch([name,phone,status], values => {
            emit('update:modelValue', {
                name:values[0],
                phone:values[1],
                status:values[2]
            })
        })

        return{
            name,
            phone,
            status,
            isActive,
            reset:()=>{
                name.value=''
                phone.value = ''
                status.value=null
            }
        }
    }
}
</script>

<style scoped>
    .filter > div {
        width:auto;
    }
    .form-control input,
    .form-control select{
        font-family: Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;
        margin: 0 5px;
        outline: none;
        border: 2px solid #ccc;
        display: inline;
        width: 22%;
        color: #2c3e50;
        padding: 0.5rem 1.5rem;
        border-radius: 3px;
        font-size: 1rem;
        resize: none;
    }
</style>