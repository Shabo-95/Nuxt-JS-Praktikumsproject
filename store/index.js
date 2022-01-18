export const state = () => ({
  users: [],
})

// Important Actions are Asynchronous For Example These Are Good For API Calls
export const actions = {
  async fetchAllUsers(state) {
    let api_url = 'https://jsonplaceholder.typicode.com/users/'

    const fetchedUsers = await this.$axios
      .get(api_url)
      .then((response) => response.data)
    state.commit('setUsers', fetchedUsers)
  },
}

// Important Mutations are Synchronous (This Is The Difference From Actions)
export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
}

export const getters = {
  users(state) {
    return state.users
  },
}
