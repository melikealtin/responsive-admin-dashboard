<template>
  <div class="item">
    <div class="icon" :class="[sale.color]">
      <span class="material-icons-sharp">
        {{ sale.icon }}
      </span>
    </div>
    <div class="right">
      <div class="info">
        <h3>{{ sale.title }}</h3>
        <small class="text-muted">Last 24 Hours </small>
      </div>
      <h5 class="success">{{ sale.percentage }}%</h5>
      <h3>{{ sale.number }}</h3>
    </div>
  </div>
</template>

<script setup>
defineProps({
  sale: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.item {
  background: $color-white;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.7rem;
  padding: 1.4rem $card-padding;
  border-radius: $border-radius-3;
  box-shadow: $box-shadow;
  transition: 300ms all ease;

  &:hover {
    box-shadow: none;
  }

  .icon {
    padding: 0.6rem;
    color: $color-white;
    border-radius: 50%;
    display: flex;
    &.online {
      background: $color-primary;
    }
    &.offline {
      background: $color-danger;
    }
    &.customers {
      background: $color-success;
    }
  }

  .right {
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin: 0;
    width: 100%;
    h5 {
      color: #ffbb55;
    }
  }
}
</style>
