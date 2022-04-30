<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  created() {
  
    let contacts = localStorage.getItem('contacts')
    if(!contacts) {
      localStorage.setItem('contacts', JSON.stringify([]))
    }

    console.info("contacts", contacts)
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
