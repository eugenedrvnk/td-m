<template>
  <div class="user-item">
    <div class="user-item__avatar">
      <img :src="user.picture.large" alt="">
    </div>
    <div class="user-item__row">
      <span>ID:</span>
      <span>{{ user.id }}</span>
    </div>
    <div class="user-item__row">
      <span>Firstname:</span>
      <span>{{ user.name.first }}</span>
    </div>
    <div class="user-item__row">
      <span>Lastname:</span>
      <span>{{ user.name.last }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  },
}
</script>

<style lang="scss">
  .user-item {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 10px;
    cursor: pointer;

    &__row {
      display: flex;
      padding: 10px 0;
      border-bottom: 2px solid rgba(0, 0, 0, 0.164);
      &:first-child {
        margin-right: 10px;
      }
    }
  }
</style>