<template>
  <div>
    <div class="search">
      <input type="text"
            v-model="filter"
            @input="keyPushSearch($event, filter)"
            placeholder="Buscar Contatos">
    </div>
    <div>
      <card-contact v-for="(contact, c) in filterDataListBySearch(contacts)"
                    :key="c"
                    @update="getContacts()"
                    :contact="contact"
      />
    </div>
  </div>
</template>

<script>
import {PaginationMixin} from "@/mixins/PaginationMixin"
import {ContactsManager} from "@/mixins/ContactsManager"
import CardContact from "@/components/contacts-list/CardContact"
export default {
    name: "contacts-list-conponent",
    mixins: [PaginationMixin, ContactsManager],
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

<style lang="scss">
.search {
    position: sticky;
    top: 0;
    background-color: map-get($alfa-colors, 'alfa-white');
    padding: 1em 1em 1em 1em;
}
</style>