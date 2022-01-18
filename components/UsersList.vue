<template>
  <div>
    <ul v-for="user in users" :key="user.id">
      <li>{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['users']),
  },
  methods: {
    ...mapActions(['fetchAllUsers']),
  },
  created() {
    this.fetchAllUsers()
  },
}
</script>

<style></style>
