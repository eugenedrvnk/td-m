<template>
  <div class="list-page">
    <input 
      class="list-page__filter-input"
      v-model="filterWord"
    />
    <div 
      class="list-page__user-items"
      v-if="filteredUsers.length"
    >
      <UserItem
        v-for="(user, index) in filteredUsers" 
        :key="index"
        :user="user"
        @click.native="$router.push(`/users/${user.id}`)"
      />
    </div>
    <div v-else>
      <h3>nobody found</h3>
    </div>
  </div>
</template>

<script>
import UserItem from '@/components/ListPage/UserItem'

export default {
  components: {UserItem},

  data() {
    return {
      filterWord: ''
    }
  },


  computed: {
    filteredUsers() {
      let users = this.$store.state.users
      if (!this.filterWord.length) return users

      let filterWord = this.filterWord.toLowerCase()

      users = users.filter(user => {
        let firstname = user.name.first.toLowerCase()
        let lastname = user.name.last.toLowerCase()

        if (firstname.includes(filterWord) || lastname.includes(filterWord)) return true
      })

      return users
    }
  }
}
</script>

<style lang="scss">
  .list-page {
    &__filter-input {
      font-size: 1.3rem;
      margin: 0 auto;
      margin-bottom: 10px;
      display: block;
      width: 70%;
    }
  }
</style>