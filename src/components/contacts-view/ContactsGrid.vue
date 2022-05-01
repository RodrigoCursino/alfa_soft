<template>
  <div>
    <contact-form :readOnly="true"/>
  </div>
</template>

<script>
import ContactForm from "@/components/contacts-form/ContactForm"
export default {
    name: "contacts-view-grid",
    components: {
        ContactForm
    }
}
</script>

<style>

</style>