import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    blogs: []
  },
  mutations: {
    obtainBlogs (state, arr) {
      state.blogs = arr
    }
  }
})
