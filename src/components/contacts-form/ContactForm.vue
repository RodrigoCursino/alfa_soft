<template>
  <div class="content_form">
    <div>
      <input-image @base64="contact.picture=$event"
                   :picture="picture"
      />
    </div>
    <div>
      <label for="">Nome</label>
      <input type="text"
            v-model="contact.name"
            placeholder="Digite um Nome">
    </div>
    <div>
      <label for="">E-mail</label>
      <input type="text"
             v-model="contact.email"
             placeholder="Digite um Email">
    </div>
    <div>
      <label for="">Telefone</label>
      <the-mask type="text"
                v-model="contact.contact"
                :mask="['(##) #####-####']"
                masked
                placeholder="Digite um Telefone"/>
    </div>
    <div class="content_button">
      <button class="button"
              @click="saveContact(contact)"
      >
        Salvar
      </button>
    </div>
  </div>
</template>

<script>
import InputImage from "@/components/contacts-form/InputImage"
import Contact    from "@/components/contacts-form/Contact.js"
import {ContactsManager} from "@/mixins/ContactsManager"
export default {
    name: "contact-form-component",
    mixins:[ContactsManager],
    created() {
      if(this.$route.params?.id) {
        this.contact = this.getContactById(this.$route.params.id)
      }
    },
    watch: {
      'contact.picture': {
        deep: true,
        handler: function(val) {
          if(val) {
            this.picture = val
          }
        }
      }
    },
    data: () => ({
        contact: new Contact(),
        picture: "",
    }),
    components: {
      InputImage
    }
}
</script>

<style lang="scss" scoped>
  .content_form {
    width: 60%;
    margin: auto;
    margin-top: 2em;

    .content_button {
      margin-top: .6em;
    }
  }
</style>