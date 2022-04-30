<template>
  <div>
    <input type="text"
           v-model="filter"
           @input="keyPushSearch($event, filter)"
           placeholder="Buscar Contatos">
    <card-contact/>
    <card-contact/>
  </div>
</template>

<script>
import {PaginationMixin} from "@/mixins/PaginationMixin"
import CardContact from "@/components/contacts-list/CardContact"
export default {
    name: "contacts-list-conponent",
    mixins: [PaginationMixin],
    components: {
        CardContact
    },
    data: () => ({
      filter: "",
      activeOnly: false,
      txtSearch: [],
      currenrPage: 1,
      totalRows: 0,
      perPage: 7,
      timerSearch: () => {}
    })
}
</script>

<style>

</style>