<template>
  <div>
    <b-card
      text-variant="white"
      :title="budget.department.name"
      :sub-title="budget.amount"
    >
      <b-card-text>
        this budget is for the month of {{ budget.month }}, year
        {{ budget.year }}. The source of funds is {{ budget.source.name }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'BudgetInfo',
  props: {
    budget: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
