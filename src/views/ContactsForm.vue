<template>
  <PageContent>
    <contacts-grid/>
  </PageContent>
</template>

<script>
import PageContent  from  "@/components/PageContent"
import ContactsGrid from  "@/components/contacts-form/ContactsGrid"
export default {
  name: "contacts-page-list",
  components: {
    PageContent,
    ContactsGrid
  }
}
</script>

<style>

</style>
