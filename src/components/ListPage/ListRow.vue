<template>
  <div class="list-row">
    <div class="list-row__avatar">
      <img :src="user.picture.medium" alt="">
    </div>
    <div class="list-row__id">
      {{ user.id }}
    </div>
    <div class="list-row__firstname">
      {{ user.name.first }}
    </div>
    <div class="list-row__lastname">
      {{ user.name.last }}
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
  .list-row {
    width: 70%;
    margin: 0 auto;
  }
</style>