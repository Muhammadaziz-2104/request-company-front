<template>
    <app-loader v-if="loader"></app-loader>
    <app-page title="Ariza" v-else :back="true">
        <h3 class="text-center"> ID:{{$route.params.id}}</h3>
        <p>F.I.O:{{request.fio}}</p>
<!--        <input v-model="request.fio">-->
        <p>Phone: {{request.phone}}</p>
        <p>Summa: {{currency(request.summa)}}</p>
        <p>
           Status: <app-status :type="request.status"></app-status>
        </p>
        <div :class="['form-control']">
            <label for="status" class="label">Status</label>
            <select v-model="status">
                <option value="done">Bajarilmoqta</option>
                <option value="cancelled">Qaytarildi</option>
                <option value="active">Tastiqlanmoqta</option>
                <option value="sending">Yuborilmoqta</option>
            </select>
        </div>
        <button class="btn primary" @click="update" v-if="hasBeChange">O'zgartirish</button>
        <button class="btn danger" @click="del">O'chirish</button>
    </app-page>
</template>

<script>
import AppPage from "@/components/ui/AppPage.vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";
import AppLoader from "@/components/ui/AppLoader.vue";
import {currency} from "@/utils/currency";
import AppStatus from "@/components/ui/AppStatus.vue";
import router from "@/router";

export default {
    name: "ViewRequest",
    setup() {
        const route = useRoute()
        const store = useStore()
        const loader = ref(false)
        const request = ref({})
        const status = ref()
        // const fio = ref()
        const hasBeChange = computed( ()=>{
            return request.value.status !== status.value
        })
        onMounted(async ()=> {
            loader.value =true
            request.value = await store.dispatch('request/loadById',route.params.id)
            status.value = request.value.status
            // fio.value = request.value.fio
            // console.log(fio.value)
            loader.value = false
        })

        // console.log(route.params.id)


        return {
            request,
            loader,
            currency,
            status,
            // fio,
            hasBeChange,
            update: async ()=> {
                const data = {...request.value, id:route.params.id,status:status.value}
                await store.dispatch('request/updateById',data)
                // request.value.fio = fio.value
                request.value.status = status.value

            },
            del: async () => {
                await store.dispatch('request/delete',route.params.id)
                await router.push('/')
            }
        }
    },
    components: {AppStatus, AppLoader, AppPage}
}
</script>

<style scoped>

</style>