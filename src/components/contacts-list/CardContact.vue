<template>
  <div class="profile card card-1">
    <div class="photo_content wrapper">
      <img src="https://media.istockphoto.com/photos/studio-portrait-of-18-year-old-woman-with-brown-hair-picture-id1295120027?b=1&k=20&m=1295120027&s=170667a&w=0&h=xAOYYiTlswncFGASSWzPDkOPWRJ5uIvrVFHpI8NUEbM=" 
           alt=""
           class="image--cover"
      >
    </div>
    <div class="info_content">
      <div class="info_details">
        <div class="label_contact">
          <icon icon="icon-user"/> 
          <span>Ana Luiza Souza</span>
        </div>
        <div class="label_contact">
          <icon icon="icon-envelope"/> 
          <span>analuiza@mail.com</span>
        </div>
        <div class="label_contact">
          <icon icon="icon-phone"/> 
          <span>(11) 99867-8989</span>
        </div>
      </div>
      <div class="info_actions">
          <icon class="buttom_icon" icon="icon-edit-pencil"/> 
          <icon class="buttom_icon" icon="icon-view-show"/> 
          <icon class="buttom_icon" icon="icon-trash"/> 
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/shared/Icons"
export default {
    name: "card-contact",
    components: {
      Icon
    }
}
</script>

<style lang="scss" scoped>

.icon-person {
  font-size: 1.3em;
}
    
    $paddingDefault: .7em;
    $borderColorDefault: #EAEAE0;
    
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
        grid-template-rows: 70% 30%;
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