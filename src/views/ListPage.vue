<template>
  <div class="list-page">
    <input v-model="filterWord"/>
    <ListRow 
      v-for="(user, index) in filteredUsers" 
      :key="index"
      :user="user"
      @click.native="$router.push(`/users/${user.id}`)"
    />
  </div>
</template>

<script>
import ListRow from '@/components/ListPage/ListRow'

export default {
  components: {ListRow},

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

<style>

</style>