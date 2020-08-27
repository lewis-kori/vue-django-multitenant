<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card shadow-sm mb-3 pl-5">
          <div class="card-body justify-content-center">
            <h5 class="text-center py-3 weight-600">Expenses</h5>
            <div class="float-right">
              <nuxt-link to="/">
                <button class="btn btn-primary btn-sm mb-2">
                  New Expense
                </button>
              </nuxt-link>
              }
            </div>
            <div class="table-responsive table-responsive-sm">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Department</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Use</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody v-if="expenses.length > 0">
                  <tr v-for="expense in expense" :key="expense.id">
                    <td>{{ expense.department }}</td>
                    <td>{{ expense.date }}</td>
                    <td>{{ expense.use }}</td>
                    <td>{{ expense.amount }}</td>

                    <td>
                      <a class="btn btn-primary btn-sm" href="#">View</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
}
</script>
