<template>
  <tr>
    <td>{{ order.productName }}</td>
    <td>{{ order.productNumber }}</td>
    <td>{{ order.paymentStatus }}</td>
    <td class="warning">{{ order.shipping }}</td>
    <td class="primary">Details</td>
  </tr>
</template>

<script setup>
defineProps({
  order: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
tbody {
  td {
    height: 2.8rem;
    border-bottom: 1px solid $color-light;
    color: $color-dark-variant;
  }
  tr {
    &:last-child {
      td {
        border: none;
      }
    }
  }
}
</style>
