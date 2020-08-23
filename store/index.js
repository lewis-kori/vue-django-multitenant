/* eslint-disable no-console */
export const state = () => ({
  organization: {},
})
export const mutations = {
  setOrganization(state, payload) {
    if (payload) {
      state.organization = payload
      if (process.client) {
        localStorage.setItem('organization', state.organization)
      }
      this.$axios.setBaseURL(state.organization.subdomain)
    } else {
      state.organization = {}
      if (process.client) {
        localStorage.removeItem('organization')
      }
      this.$axios.setBaseURL(process.env.baseURL)
    }
  },
}

export const actions = {
  async createOrganization({ commit, dispatch }, payload) {
    try {
      await this.$axios
        .post('v1/tenants/', payload.organization)
        .then((response) => {
          if (response.status === 201) {
            const organizationData = {
              name: response.data.name,
              subdomain: `http://${response.data.subdomain}:8000/api/`,
            }
            commit('setOrganization', organizationData)
            // give function to complete setting up new base url
            setTimeout(() => {
              dispatch('registerUser', payload.user)
            }, 200)
          }
        })
    } catch (e) {
      console.log('error is', e)
    }
  },
  async registerUser({ dispatch }, payload) {
    // change axios request url to post to the new org's data
    // this.$axios.setBaseURL(payload.organization.subdomain)

    try {
      await this.$axios.post('v1/auth/users/', payload).then((response) => {
        if (response.status === 201) {
          const loginData = {
            email: payload.email,
            password: payload.password,
          }
          dispatch('login', loginData)
        }
      })
    } catch (e) {}
  },
  async login({ commit }, payload) {
    try {
      await this.$auth.loginWith('local', {
        data: payload,
      })
      this.$router.push('/')
    } catch (e) {
      console.log(e)
    }
  },
}
export const getters = {
  isAuthenticated: (state) => state.auth.loggedIn,
  loggedInUser: (state) => state.auth.user,
  organization: (state) => state.organization,
}
