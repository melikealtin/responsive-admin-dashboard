<script setup>
defineProps({
  cardData: {
    type: Object,
  },
});
</script>

<template>
  <div class="sales expenses income">
    <span class="material-icons-sharp" :class="[cardData.color]">
      {{ cardData.icon }}
    </span>
    <div class="middle">
      <div class="left">
        <h3>{{ cardData.name }}</h3>
        <h1>{{ cardData.amount }}</h1>
      </div>
      <div class="progress">
        <svg>
          <circle cx="38" cy="38" r="36"></circle>
        </svg>
        <div class="number">
          <p>{{ cardData.percentage }}</p>
        </div>
      </div>
    </div>
    <small class="text-muted">Last 24 Hours</small>
  </div>
</template>

<style lang="scss">
.insights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;

  h3 {
    margin: 1rem 0 0.6rem;
    font-size: 1rem;
  }

  small {
    margin-top: 1.3rem;
    display: block;
  }

  .progress {
    position: relative;
    width: 92px;
    height: 92px;
    border-radius: 50%;
    svg {
      width: 7rem;
      height: 7rem;

      circle {
        fill: none;
        stroke: $color-primary;
        stroke-width: 14;
        stroke-linecap: round;
        transform: translate(5px, 5px);
        stroke-dasharray: 110;
        stroke-dashoffset: 92;
      }
    }
    .number {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  & > div {
    background: $color-white;
    padding: $card-padding;
    border-radius: $card-border-radius;
    margin-top: 1rem;
    box-shadow: $box-shadow;
    transition: 300ms all ease;
    &:hover {
      box-shadow: none;
    }

    span {
      padding: 0.5rem;
      border-radius: 50%;
      color: $color-white;
      font-size: 2rem;
    }
  }
  .sales {
    .blue {
      background: $color-primary;
    }
  }
  .expenses {
    .red {
      background: $color-danger;
    }
  }
  .income {
    .green {
      background: $color-success;
    }
    &:nth-child(1) {
      svg {
        circle {
          stroke-dashoffset: -30;
          stroke-dasharray: 200;
        }
      }
    }

    &:nth-child(2) {
      svg {
        circle {
          stroke-dashoffset: 20;
          stroke-dasharray: 80;
        }
      }
    }
    &:nth-child(3) {
      svg {
        circle {
          stroke-dashoffset: 35;
          stroke-dasharray: 110;
        }
      }
    }
  }
  .middle {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
