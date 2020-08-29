<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card shadow-sm mb-3 pl-5 text-white">
          <div class="card-body justify-content-center">
            <h5 class="text-center py-3 weight-600">Expenses</h5>
            <div class="float-right">
              <nuxt-link :to="{ name: 'expenses-new' }">
                <button class="btn btn-primary btn-sm mb-2">
                  New Expense
                </button>
              </nuxt-link>
            </div>
            <div class="table-responsive table-responsive-sm">
              <table class="table table-striped text-white">
                <thead>
                  <tr>
                    <th>Department</th>
                    <th>Date</th>
                    <th>Use</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody v-if="expenses.length > 0">
                  <tr v-for="expense in expenses" :key="expense.id">
                    <td>{{ expense.budget.department.name }}</td>
                    <td>{{ expense.date }}</td>
                    <td>{{ shortenText(expense.use) }}</td>
                    <td>{{ expense.amount }}</td>

                    <td>
                      <b-button
                        v-b-modal="'expense-modal'"
                        class="btn btn-sm"
                        variant="primary"
                        @click="populateModalData(expense.date, expense.use)"
                        >View</b-button
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <b-modal id="expense-modal" hide-footer>
              <template v-slot:modal-title>
                <code>{{ modalData.title }}</code>
              </template>
              {{ modalData.text }}
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Expenses',
  props: {
    expenses: {
      type: Array,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      modalData: {
        title: '',
        text: '',
      },
    }
  },
  methods: {
    populateModalData(title, text) {
      this.modalData.title = title
      this.modalData.text = text
    },
    shortenText(text) {
      if (text.length > 150) {
        return text.slice(0, 150) + '...'
      }
      return text
    },
  },
}
</script>
