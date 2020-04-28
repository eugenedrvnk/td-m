<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$store.dispatch('fetchUsers', 'https://randomuser.me/api/?results=20'))
  }
}
</script>

<style lang="scss">

</style>
