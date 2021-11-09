import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload
      console.log(state.posts)
    },
  },
  actions: {
    async loadPosts({ commit }) {
      await axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          commit('setPosts', response.data)
        })
    },
  },
  getters: {
    getPosts(state) {
      return state.posts
    },
  },
  modules: {},
})
