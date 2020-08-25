/* eslint-disable no-console */
export const state = () => ({
  organization: {},
  registrationError: false,
})
export const mutations = {
  setRegistrationError(state, payload) {
    state.commit = payload
  },
  setOrganization(state, payload) {
    if (payload) {
      state.organization = payload
      if (process.client) {
        localStorage.setItem('organization', JSON.stringify(state.organization))
      }
      // change axios request url to post to the new org's data
      this.$axios.setBaseURL(state.organization.subdomain)
    } else {
      state.organization = {}
      if (process.client) {
        localStorage.removeItem('organization')
      }
      // change axios request url to post to the default baseUrl
      this.$axios.setBaseURL(process.env.baseURL)
    }
  },
}

export const actions = {
  async getOrganization({ commit }, payload) {
    try {
      await this.$axios
        .post('v1/tenants/info/', {
          tenant_id: payload,
        })
        .then((response) => {
          if (response.status === 200) {
            const orgData = {
              name: response.data.name,
              subdomain: `http://${response.data.subdomain}:8000/api/`,
            }
            commit('setOrganization', orgData)
          }
        })
    } catch (e) {
      if (e.response.status === 404) {
        this.$toast.error(`${e.response.data.detail}`)
      }
    }
  },
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
      commit('setRegistrationError', true)
      this.$toast.error('Unable to register organization at this time')
    }
  },
  async registerUser({ commit, dispatch }, payload) {
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
    } catch (e) {
      if (e.response.status === 400) {
        this.$toast.error(e.response.data)
      }
      commit('setRegistrationError', true)
    }
  },
  async login({ commit, state }, payload) {
    try {
      await this.$auth.loginWith('local', {
        data: payload,
      })
      this.$toast.success(
        `Login successful, welcome to ${state.organization.name} budgetter.`
      )
      this.$router.push('/')
    } catch (e) {
      this.$toast.error(e.response.data.detail)
    }
  },
}
export const getters = {
  isAuthenticated: (state) => state.auth.loggedIn,
  loggedInUser: (state) => state.auth.user,
  organization: (state) => state.organization,
  registrationError: (state) => state.registrationError,
}
