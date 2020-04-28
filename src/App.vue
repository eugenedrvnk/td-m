<template>
  <div class="app__container">
    <div class="app__nav-list">
      <router-link 
        to="/"
        v-if="$route.path != '/'"
        class="app__nav-item"
      >
        Main Page
      </router-link>
       <router-link 
        to="/"
        v-if="$route.path == '/'"
        class="app__nav-item"
      >
        Click on smbd 😏
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
  @import './assets/scss/main';

  .app {
    &__container {
      max-width: 500px;
      margin: 0 auto;
    }

    &__nav-list {
      height: 70px;
      border-radius: 3px;
      margin: 10px 0;
      font-size: 2rem;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #00000005;
    }

    &__nav-item {

    }
  }
</style>
