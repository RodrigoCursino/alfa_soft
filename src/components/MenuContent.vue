<template>
  <ul class="menu">
    <li v-for="(item, i) in items"
       :key="i"
       :class="item.active?'item item_active':'item'"
    >
      <router-link class="link_menu" :class="item.active?'link_active':''" :to="{ name: item.name}">
        <icon class="menu_icon" :icon="item.icon"/>
      </router-link>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/shared/Icons"
export default {
    name: "menu-component",
    components: {
      Icon
    },
    created() {
        let list = this.$router.options.routes.filter( x => x.menu)
        list.forEach( (item) => {
          this.$set(item,'active', item.name === this.$route.name)
        })
        this.items = list
    },
    data: () => ({
        items: []
    })
}
</script>

<style scoped lang="scss">
  .menu {
    list-style: none;
    
    .link_menu {
       
      color: darken(map-get($alfa-colors, 'alfa-content'), 20%);

      .menu_icon {
        font-size: 2em;
        margin-bottom: .5em;
      }

      &.link_active {
        color: darken(map-get($alfa-colors, 'alfa-content'), 50%);
      }
    }
    .item_active {
      border-right: 8px solid map-get($alfa-colors, 'alfa-secondary');
    }
  }
</style>