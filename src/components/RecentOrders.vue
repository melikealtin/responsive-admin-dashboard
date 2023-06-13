<template>
  <h2>Recent Orders</h2>
  <table>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Product Number</th>
        <th>Payment</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody>
      <RecentOrdersItem
        v-for="(order, index) in productOrders"
        :key="index"
        :order="order"
      />
    </tbody>
  </table>
</template>

<script setup>
import RecentOrdersItem from "./RecentOrdersItem.vue";

defineProps({
  productOrders: {
    type: Object,
  },
});
</script>

<style lang="scss">
h2 {
  margin-bottom: 0.8rem;
}

table {
  background: $color-white;
  width: 100%;
  border-radius: $card-border-radius;
  padding: $card-padding;
  text-align: center;
  box-shadow: $box-shadow;
  transition: 300ms all ease;
  &:hover {
    box-shadow: none;
  }
}
</style>
