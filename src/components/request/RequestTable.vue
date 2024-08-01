<template>
<!--    <h2>Arizalar</h2>-->

<!--    <button @click="somga" class="btn primary">Uzb</button>-->
<!--    <button @click="" class="btn primary">Kor</button>-->
<!--    <pre>{{currency.formatter}}</pre>-->
    <table v-if="requests.length" class="table">
        <thead>
            <tr>
                <th>№</th>
                <th>FIO</th>
                <th>Tel</th>
                <th>Summa</th>
                <th>Status</th>
                <th>Ammalar</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(req, idx ) in requests" :key="req.id">
                <td>{{idx + 1}}</td>
                <td>{{ req.fio }}</td>
                <td>+{{ req.phone }}</td>
                <td>{{ currency(req.summa) }}</td>
<!--                <td>{{ currency(req.summa) }}</td>-->
<!--                <td>{{ currency(req.summa) }}</td>-->
                <td>
                    <app-status :type="req.status"></app-status>
                </td>
                <td>
                    <router-link v-slot="navigate" :to="{name:'Request',params:{id:req.id}}">
                        <button class="btn primary" @click="navigate">Ochish</button>
                    </router-link>
                </td>

            </tr>

        </tbody>
    </table>
    <div v-else>
        <h4>Bazada ma`limot yo'q</h4>
    </div>
</template>

<script>
import {useStore} from "vuex";
// import {onMounted} from "vue";
// import {computed} from "vue";
import {currency} from "@/utils/currency";
import AppStatus from "@/components/ui/AppStatus.vue";

export default {
    components: {AppStatus},
    props:['requests'],
    name: "AppRequest",
    setup() {
        const store = useStore()
        const deleteRequests = async values => {
            await store.dispatch('request/delete',values)

            await store.dispatch('request/load')
            console.log(values)
        }
        // console.log(deleteRequests)
        // function somga() {
        //      currency.formatter = new Intl.NumberFormat('uz', {style:'currency', currency:'UZS'})
        //
        // }

        return {
            deleteRequests,
            currency,
            // somga
            // somga: ()=> {
            //     [currency.formatter= currency(new Intl.NumberFormat('uz', {style:'currency', currency:'UZS'}))]
            // }
        }
    }
}
</script>

<style scoped>

</style>