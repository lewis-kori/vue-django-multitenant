<template>
  <div class="card mb-4 bg-defyn">
    <div class="card-body">
      <div class="media d-flex align-items-center">
        <div class="mr-4 rounded-circle bg-white sr-icon-box text-success">
          <i class="fa fa-money"></i>
        </div>
        <div class="media-body text-white">
          <h4 class="text-uppercase mb-0 weight-500">${{ account.amount }}</h4>
          <span>{{ account.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountInfo',
  props: {
    account: {
      type: Object,
      default() {
        return {
          name: 'localcryptos',
          amount: 200,
        }
      },
    },
  },
}
</script>
