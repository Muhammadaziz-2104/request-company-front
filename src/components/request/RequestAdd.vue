<template>
    <form action="" @submit.prevent="submit">
        <div :class="['form-control',{'invalid' : fioMassage}]">
            <label for="fio" >FIO</label>
            <input
                    type="text"
                    name="fio"
                    v-model="fio"
                    id="fio"
                    @blur="fioBlur"
            >
            <small v-if="fioMassage" class="invalid">{{ fioMassage }}</small>
        </div>
        <div :class="['form-control',{'invalid' : phoneMassage}]">
            <label for="phone" >Telefon raqam</label>
            <input
                    type="text"
                    name="phone"
                    v-model="phone"
                    id="phone"
                    @blur="phoneBlur"
            >
            <small v-if="phoneMassage" class="invalid">{{phoneMassage}}</small>
        </div>
        <div :class="['form-control',{'invalid' : summaMassage}]">
            <label for="summa" >Summa</label>
            <input
                    type="number"
                    name="summa"
                    v-model="summa"
                    id="summa"
                    @blur="summaBlur"
            >
            <small v-if="summaMassage" class="invalid">{{summaMassage}}</small>
        </div>
        <div :class="['form-control']">
            <label for="status" class="label">Status</label>
            <select v-model="status">
                <option value="done">Bajarilmoqta</option>
                <option value="cancelled">Qaytarildi</option>
                <option value="active">Tastiqlanmoqta</option>
                <option value="sending">Yuborilmoqta</option>
            </select>
        </div>
        <input type="submit" value="Saqlash" class="btn" :disabled="isSubmitting">
        <h6 v-if="isSubmitting">Ma'lumot saqlanmoqta
            <app-loader class="with:50px;"></app-loader>
        </h6>
    </form>
</template>

<script>
import {userequestForm} from "@/use/request-form";
import {useStore} from "vuex";
import AppLoader from "@/components/ui/AppLoader.vue";
import {ref} from "vue";

export default {
    name: "RequestAdd",
    components: {AppLoader},
    emits:['created'],
    setup(_,{emit}) {
        const loader = ref(false)
        const store =useStore()

        const submit = async values => {
            loader.value = true
            await store.dispatch('request/create',values)
            console.log(values)
            emit('created')
            loader.value = true

        }
        return {
            ...userequestForm(submit),
            loader
        }
    }
}
</script>

<style scoped>

</style>