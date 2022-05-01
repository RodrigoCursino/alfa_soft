<template>
  <div class="page_content">
    <div class="menu_content">
       <menu-content/>
    </div>
    <div class="content_page">
        <div class="display_page card-2">
            <slot></slot>   
        </div>
    </div>
  </div>
</template>

<script>
import MenuContent from "@/components/MenuContent"
export default {
    name: "page-content",
    components: {
        MenuContent
    }
   
}
</script>

<style lang="scss" scoped>

    .page_content {
        
        display: grid;
        grid-template-columns: 100px 1fr;
        grid-template-rows: auto;
        grid-template-areas: "menu page";
       
        margin: auto;
        height: 90vh;
        max-width: 880px;

        .menu_content {
            grid-area: menu;
        }

        .content_page {
            
            grid-area: page;
            
            .display_page {
                background-color: white;
                width: 100%;
                height: 100%;
                border-radius: 5px;
                padding: 1em;
            }
        }
    }
</style>