<template>
  <div class="profile card card-1">
    <div class="photo_content wrapper">
      <img :src="contact.picture" 
           alt=""
      >
    </div>
    <div class="info_content">
      <div class="info_details">
        <div class="label_contact">
          <icon icon="icon-user"/> 
          <span>{{ contact.name }}</span>
        </div>
        <div class="label_contact">
          <icon icon="icon-envelope"/> 
          <span>{{ contact.email }}</span>
        </div>
        <div class="label_contact">
          <icon icon="icon-phone"/> 
          <span>{{ contact.contact }}</span>
        </div>
      </div>
      <div class="info_actions">
      <span  @click="edit">
          <icon class="buttom_icon" 
                icon="icon-edit-pencil"
               
          /> 
      </span>
          <icon class="buttom_icon" icon="icon-view-show"/> 
      <span @click="deleteContact">
          <icon class="buttom_icon" icon="icon-trash"/> 
      </span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon    from "@/components/shared/Icons"
import Contact from "@/components/contacts-form/Contact.js"
import {ContactsManager} from "@/mixins/ContactsManager"
export default {
    name: "card-contact",
    mixins: [ContactsManager],
    components: {
      Icon
    },
    props: {
      contact: {
        required: true,
        type: Object,
        default: () => Contact
      }
    },
    methods: {
      edit() {
        this.$router.push(`/register/${this.contact.id}`)
      },
      deleteContact() {
        const self = this
        this.$swal.fire({
          title: 'Atenção!!!',
          text: "Vocẽ tem cereteza disso?",
          confirmButtonText: 'OK',
          showCancelButton: true,
          icon: 'warning',
        }).then((result) => {
          if (result.isConfirmed) {
            self.removeContact(self.contact)
            self.$emit("update")
          } 
        })
      }
    }
}
</script>

<style lang="scss" scoped>
    $paddingDefault: .7em;
    $borderColorDefault: map-get($alfa-colors, 'alfa-content');
    
    .profile {
      
      display: grid;
      margin-bottom: .3em;
      padding: .8em;
      box-sizing: border-box;
      grid-template-columns: 1fr 8fr;
      grid-template-rows: auto;
      grid-template-areas: "photo info";

      .photo_content {
        
        grid-area: photo;
        display: flex;
        align-items: center;
        justify-content: center;
  
        img {
            width: 115px;
            height: 115px;
            border-radius: 50%;
            object-fit: cover;
            object-position: center right;
        }
      }

      .info_content {
        
        grid-area: info;
        border-left: 1px solid $borderColorDefault;
        
        display: grid;
        margin-left: $paddingDefault;
        grid-template-columns: 1fr;
        grid-template-rows: 74% 26%;
        grid-template-areas: "details" "actions";

        .info_details {
          
          grid-area: details;
          padding-left: $paddingDefault;
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          flex-direction: column;

          .label_contact {
            display: flex;
            align-items: flex-end;
            :first-child {
              margin-right: 1em;
            }
          }
        }

        .info_actions {
          grid-area: actions;
          border-top: 1px solid $borderColorDefault;
          display: flex;
          justify-content: flex-end;
          padding-top: .8em;
        }
      }
    }
</style>