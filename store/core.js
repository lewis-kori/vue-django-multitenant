export const state = () => ({
  departments: [],
  accounts: [],
  budgets: [],
  expenses: [],
})

export const mutations = {
  setDepartments(state, payload) {
    state.departments = payload
  },
  updateDepartments(state, payload) {
    state.departments.push(payload)
  },
  setAccounts(state, payload) {
    state.accounts = payload
  },
  updateAccounts(state, payload) {
    state.accounts.push(payload)
  },
  setBudgets(state, payload) {
    state.budgets = payload
  },
  updateBudgets(state, payload) {
    state.budgets.push(payload)
  },
  setExpenses(state, payload) {
    state.expenses = payload
  },
  updateExpenses(state, payload) {
    state.expenses.push(payload)
  },
}

export const actions = {
  async newDepartment({ commit }, payload) {
    try {
      await this.$axios.post('v1/departments/', payload).then((response) => {
        if (response.status === 201) {
          commit('updateDepartments', response.data)
          this.$toast.success(`${response.data.name} created successfully.`)
          this.$router.push({ name: 'main' })
        }
      })
    } catch (e) {
      this.$toast.error('could not create department at this time')
    }
  },
  async getDepartments({ commit }) {
    try {
      await this.$axios.get('v1/departments/').then((response) => {
        if (response.status === 200) {
          commit('setDepartments', response.data)
        }
      })
    } catch (e) {
      this.$toast.error('Could not retrieve departments at this time.')
    }
  },
  async newAccount({ commit }, payload) {
    try {
      await this.$axios.post('v1/accounts/', payload).then((response) => {
        if (response.status === 201) {
          commit('updateAccounts', response.data)
          this.$router.push({ name: 'main' })
          this.$toast.success(`${response.data.name} created successfully.`)
        }
      })
    } catch (e) {
      this.$toast.error('could not create account at this time')
    }
  },
  async getAccounts({ commit }) {
    try {
      await this.$axios.get('v1/accounts/').then((response) => {
        if (response.status === 200) {
          commit('setAccounts', response.data)
        }
      })
    } catch (e) {
      this.$toast.error('Could not retrieve accounts at this time.')
    }
  },
  async newBudget({ commit }, payload) {
    try {
      await this.$axios.post('v1/budgets/', payload).then((response) => {
        if (response.status === 201) {
          commit('updateBudgets', response.data)
          this.$router.push({ name: 'main' })
          this.$toast.success(`budget created created successfully.`)
        }
      })
    } catch (e) {
      this.$toast.error('could not create account at this time')
    }
  },
  async getBudgets({ commit }) {
    try {
      await this.$axios.get('v1/budgets/').then((response) => {
        if (response.status === 200) {
          commit('setBudgets', response.data)
        }
      })
    } catch (e) {
      this.$toast.error('Could not retrieve accounts at this time.')
    }
  },
  async getExpenses({ commit }, payload) {
    try {
      let url = ''
      if (payload) {
        url = `v1/expenses/department/${payload.department_id}/`
      } else {
        url = 'v1/expenses/'
      }
      await this.$axios.get(url).then((response) => {
        if (response.status === 200) {
          commit('setExpenses', response.data)
        }
      })
    } catch (e) {
      this.$toast.error(`Could not retrieve expenses at this time. ${e}`)
    }
  },
  async newExpense({ commit }, payload) {
    try {
      await this.$axios.post('v1/expenses/', payload).then((response) => {
        if (response.status === 201) {
          commit('updateExpenses', response.data)
          this.$router.push({ name: 'main' })
          this.$toast.success(`expense created successfully.`)
        }
      })
    } catch (e) {
      this.$toast.error('could not create expense at this time')
    }
  },
}

export const getters = {
  departments: (state) => state.departments,
  accounts: (state) => state.accounts,
  budgets: (state) => state.budgets,
  expenses: (state) => state.expenses,
}
