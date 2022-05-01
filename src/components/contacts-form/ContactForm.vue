<template>
  <div class="content_form">
    <div>
      <input-image @base64="$v.contact.picture.$model=$event"
                   :picture="picture"
                   :disabled="readOnly"
      />
      <small class="text-danger" v-if="$v.contact.picture.$error && !$v.contact.picture.required">A Imagem é Obrigatória.</small>
    </div>
    <div>
      <label class="label_form">Nome</label>
      <input type="text"
             :disabled="readOnly"
             v-model="$v.contact.name.$model"
             placeholder="Digite um Nome">
             <small class="text-danger" v-if="$v.contact.name.$error && !$v.contact.name.required">O Nome é Obrigatório.</small>
             <small class="text-danger" v-if="$v.contact.name.$error && !$v.contact.name.minLength">O Nome deve conter no mínimo {{ $v.contact.name.$params.minLength.min }} caracteres.</small>
    </div>
    <div>
      <label class="label_form">E-mail</label>
      <input type="text"
             :disabled="readOnly"
             v-model="$v.contact.email.$model"
             placeholder="Digite um Email">
             <small class="text-danger" v-if="$v.contact.email.$error && !$v.contact.email.required">O e-mail é Obrigatório.</small>
             <small class="text-danger" v-if="$v.contact.email.$error && !$v.contact.email.email">Digite um email válido.</small>
    </div>
    <div>
      <label class="label_form">Telefone</label>
      <the-mask type="text"
                :disabled="readOnly"
                v-model="$v.contact.contact.$model"
                :mask="['(##) #####-####']"
                masked
                placeholder="Digite um Telefone"/>
                <small class="text-danger" v-if="$v.contact.contact.$error && !$v.contact.contact.required">O Telefone é Obrigatório.</small>
                <small class="text-danger" v-if="$v.contact.contact.$error && !$v.contact.contact.minLength">O Telefone deve conter no mínimo {{ $v.contact.contact.$params.minLength.min }} caracteres.</small>
    </div>
    <div class="content_button">
      <button class="button"
              v-show="!readOnly"
              :disabled="$v.contact.$invalid"
              @click="saveContact(contact)"
      >
        Salvar
      </button>
    </div>
  </div>
</template>

<script>
import InputImage                       from "@/components/contacts-form/InputImage"
import {ContactsManager}                from "@/mixins/ContactsManager"
import Contact                          from "@/components/contacts-form/Contact.js"
import { validationMixin }              from 'vuelidate'
import { required, minLength, email }   from 'vuelidate/lib/validators'
export default {
    name: "contact-form-component",
    mixins:[ContactsManager, validationMixin],
    props: {
      readOnly: {
        required: false,
        default: false,
        type: Boolean
      }
    },
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
    validations: {
      contact: {
        contact: {
          required,
          minLength: minLength(15),
        },
        name: {
          required,
          minLength: minLength(3),
        },
        email: {
          required,
          email
        },
        picture: {
          required
        }
      }
    },
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
    .label_form {
      margin-top: 18px !important;
    }
    .text-danger {
      color: red;
      margin-bottom: 13px;
    }
  }
</style>