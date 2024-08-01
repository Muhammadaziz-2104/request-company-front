<template>
<!--  <app-loader class="width:50px;"></app-loader>-->
  <app-loader v-if="loader"></app-loader>

  <app-page title="Bosh saxifa" v-else>
    <template #header>
      <button class="btn primary" @click="modal = true">Ma'lumot qo'shish</button>
    </template>
    <request-filter v-model="tom"></request-filter>
    <request-table :requests="requests" ></request-table>
  </app-page>
  <teleport to="body">
    <app-modal title="Qo`shish" v-if="modal" @close="modal = false" >
      <request-add @created="modal = false"></request-add>
    </app-modal>
  </teleport>
  <app-sidebar-call></app-sidebar-call>
</template>

<script>
import AppPage from "@/components/ui/AppPage.vue";
import {ref, computed, onMounted} from 'vue'
import AppModal from "@/components/ui/AppModal.vue";
import RequestTable from "@/components/request/RequestTable.vue";
import RequestAdd from "@/components/request/RequestAdd.vue";
import {useStore} from "vuex";
import AppLoader from "@/components/ui/AppLoader.vue";
import RequestFilter from "@/components/request/RequestFilter.vue";
import AppSidebarCall from "@/components/ui/AppSidebarCall.vue";
import {currency} from "@/utils/currency";

export default {
  setup() {
    const store = useStore()
    const modal = ref(false)
    const loader = ref(false)
    const tom = ref({})

    const requests = computed(()=> store.getters['request/requests']

        .filter(request => {
          if(tom.value.name) {
            return request.fio.includes(tom.value.name)
          }
          return request
        })

        .filter(request => {
          if(tom.value.phone) {
            return request.phone.includes(tom.value.phone)
          }
          return request
        })

        .filter(request => {
          if(tom.value.status) {
            return tom.value.status === request.status
          }
          return request
        })
    )
    onMounted(async () => {
      loader.value = true

      await store.dispatch('request/load')

      loader.value = false
    })
    return{
      modal,
      requests,
      loader,
      tom,
      currency
    }
  },
  components: {AppSidebarCall, RequestFilter, AppLoader, RequestAdd, RequestTable, AppModal, AppPage}

}
</script>
