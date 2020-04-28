<template>
  <div id="app">
    <div id="nav">
      <router-link 
        to="/"
        v-if="$route.path != '/'"
      >
        Main Page
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  async created() {
    this.$store.dispatch('fetchUsers', 'https://randomuser.me/api/?results=20')
  }
}
</script>

<style lang="scss">

</style>
