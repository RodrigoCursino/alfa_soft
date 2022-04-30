<template>
  <div>
    <div>
      <input type="text"
            v-model="contact.name"
            placeholder="Digite um Nome">
    </div>
    <div>
      <input type="text"
            v-model="contact.email"
            placeholder="Digite um Email">
    </div>
    <div>
      <input type="text"
            v-model="contact.contact"
            placeholder="Digite um Telefone">
    </div>
    <button class="buttom">
      Salvar
    </button>
  </div>
</template>

<script>
import Contact from "@/components/contacts-form/Contact.js"
export default {
    name: "contact-form-component",
    data: () => ({
        contact: new Contact()
    })
}
</script>

<style>

</style>