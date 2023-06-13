<template>
  <div class="update">
    <div class="profile-photo">
      <img :src="update.img" alt="" />
    </div>
    <div class="message">
      <p>
        <b> {{ update.name }} </b> received his order of {{ update.product }}
      </p>
      <small class="text-muted"> {{ update.time }} Minutes Ago</small>
    </div>
  </div>
</template>

<script setup>
defineProps({
  update: {
    type: Object,
  },
});
</script>

<style lang="scss">
.updates {
  background: $color-white;
  padding: $card-padding;
  border-radius: $card-border-radius;
  box-shadow: $box-shadow;
  transition: 300ms all ease;

  &:hover {
    box-shadow: none;
  }
  .update {
    display: grid;
    grid-template-columns: 2.6rem auto;
    gap: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
