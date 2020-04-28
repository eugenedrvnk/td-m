<template>
  <div class="user-page">
    <div class="user-page__img" v-if="user">
      <img :src="user.picture.large" alt="">
    </div>
    <div class="user-page__row"
      v-for="(value, key, index) in formattedInfo" 
      :key="index"
    >
      <div class="user-page__row-key">
        {{ key }} ->
      </div>
      <div class="user-page__row-value">
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.users.find(user => user.id == this.$route.params.id)
    },

    formattedInfo() {
      if (!this.user) return

      return {
        location: `${this.user.location.city}, ${this.user.location.country}`,
        email: this.user.email,
        gender: this.user.gender,
        birthday: new Date(this.user.dob.date).toDateString(),
        'phone-number': this.phone
      }
    }
  }
}
</script>

<style>

</style>