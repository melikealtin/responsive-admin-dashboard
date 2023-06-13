<template>
  <div class="container">
    <aside :class="`${is_expanded && 'is_expanded'}`">
      <SidebarSection @ToggleMenu="ToggleMenu" />
    </aside>

    <main>
      <h1>Dashboard</h1>
      <div class="date">
        <input type="date" />
      </div>

      <div class="insights">
        <TheCard
          v-for="(cardData, index) in cardsData"
          :key="index"
          :cardData="cardData"
        />
      </div>
      <div class="recent-orders">
        <RecentOrders :productOrders="productOrders" />
        <a href="#"> Show All</a>
      </div>
    </main>

    <aside class="right">
      <div class="top">
        <button id="menu-btn" @click="ToggleMenu">
          <span class="material-icons-sharp">menu</span>
        </button>
        <div @click="toggleDark()" class="theme-toggler">
          <span class="material-icons-sharp active"> light_mode </span>

          <span class="material-icons-sharp night"> dark_mode </span>
        </div>
        <div class="profile">
          <div class="info">
            <p>Hey, <b>Melo</b></p>
            <small class="text-muted">Admin</small>
          </div>
          <div class="profile-photo">
            <img src="@assets/avatar2.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="recent-updates">
        <h2>Recent Updates</h2>
        <div class="updates">
          <RecentUpdates
            v-for="(update, index) in resentUpdates"
            :key="index"
            :update="update"
          />
        </div>
      </div>

      <div class="sales-analytics">
        <h2>Sales Analytics</h2>

        <SalesAnalytics
          v-for="(sale, index) in salesAnalytics"
          :key="index"
          :sale="sale"
        />

        <div class="item add-product">
          <div>
            <span class="material-icons-sharp">add </span>
            <h3>Add Product</h3>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import SidebarSection from "./components/SidebarSection.vue";
import {
  cardsData,
  productOrders,
  resentUpdates,
  salesAnalytics,
} from "./libs/enum.js";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const is_expanded = ref(false);
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Braah+One&family=Poppins:wght@300;400;500;600;700;800&display=swap");

html {
  font-size: 14px;
}

//dark theme//
.dark {
  body {
    background-color: #181a1e;
    color: #edeffd;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.4);

    .container {
      background-color: #181a1e;
      color: #edeffd;
      box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.4);

      aside {
        a {
          display: flex;
          color: $color-info-dark;
          margin-left: 2rem;
          gap: 1rem;
          align-items: center;
          position: relative;
          height: 3.7rem;
          transition: all 300ms ease;
          span {
            font-size: 1.6rem;
            transition: all 300ms ease;
          }
          &:last-child {
            position: absolute;
            bottom: 2rem;
            width: 100%;
          }
          &:active {
            background: $color-light;
            color: $color-primary;
            margin-left: 0;
            &:before {
              content: "";
              width: 6px;
              height: 100%;
              background: $color-primary;
            }
            span {
              color: $color-primary;
              margin-left: calc(1rem - 3px);
            }
          }
          &:hover {
            color: $color-primary;
            span {
              margin-left: 1rem;
            }
          }
        }
        .message-count {
          background: $color-danger;
          color: $color-white;
          padding: 2px 10px;
          font-size: 11px;
          border-radius: $border-radius-1;
        }
      }

      a {
        color: #edeffd;
      }
      .text-muted {
        color: #edeffd;
      }
      p {
        color: #a3bdcc;
      }
      b {
        color: #edeffd;
      }
      main {
        border-radius: $border-radius-1;
        input[type="date"] {
          background: transparent;
          color: #edeffd;
        }

        .insights {
          & > div {
            background: rgba(132, 139, 200, 0.18);
            box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.4);
            &:hover {
              box-shadow: none;
            }
          }
        }
        .recent-orders {
          table {
            background: rgba(132, 139, 200, 0.18);
            box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.4);
            transition: 300ms all ease;
            &:hover {
              box-shadow: none;
            }
          }
          a {
            text-align: center;
            display: block;
            margin: 1rem auto;
            color: $color-primary;
          }
        }
      }
      .right {
        .top {
          .theme-toggler {
            transition: 300ms all eas;
            .active {
              background: rgba(132, 139, 200, 0.18);
              color: #181a1e;
            }
            .night {
              background: #7380ec;
              border-radius: 0.4rem;
            }
          }
        }

        .recent-updates {
          .updates {
            background: rgba(132, 139, 200, 0.18);
            box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.4);
            transition: 300ms all ease;

            &:hover {
              box-shadow: none;
            }
          }
        }
        .sales-analytics {
          .item {
            background: rgba(132, 139, 200, 0.18);
            box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.4);
            transition: 300ms all ease;

            &:hover {
              box-shadow: none;
            }
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      .container {
        width: 100%;
        grid-template-columns: 1fr;

        aside {
          position: fixed;
          left: -100%;
          background: #181a1e;
          width: 18rem;
          z-index: 3;
          box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.4);
          height: 100vh;
          padding-right: $card-padding;
          transition: 350ms all ease-in-out;

          &.is_expanded {
            left: 0;
          }

          .sidebar {
            .top {
              .logo {
                margin-left: -10rem;
                display: flex;
                align-items: center;
                gap: 0.2rem;
                h2 {
                  display: inline;
                  margin-bottom: 0.1rem;
                }
              }
            }

            a {
              width: 100%;
              height: 3.4rem;
              h3 {
                display: inline;
              }
              &:last-child {
                position: absolute;
                bottom: 5rem;
              }
            }
          }
        }

        main {
          margin-top: 8rem;
          padding: 0 1rem;

          .recent-orders {
            position: relative;
            margin: 3rem 0 0 0;
            width: 100%;

            table {
              width: 100%;
              margin: 0;
            }
          }
        }

        .right {
          width: 94%;
          margin: 0 auto 4rem;
          .top {
            position: fixed;
            left: 0;
            top: 0;
            align-items: center;
            padding: 0 0.8rem;
            height: 4.6rem;
            background: rgba(132, 139, 200, 0.18);
            width: 100%;
            margin: 0;
            z-index: 2;
            box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.4);

            .theme-toggler {
              width: 4.4rem;
              position: absolute;
              left: 66%;
            }
            .profile {
              .info {
                display: none;
              }
            }
            #menu-btn {
              display: inline-block;
              background: transparent;
              cursor: pointer;
              color: #edeffd;
              position: absolute;
              left: 1rem;

              span {
                font-size: 2rem;
              }
            }
          }
        }
      }
    }
  }
}

body {
  width: 100vw;
  height: 100vh;
  font-family: poppins, sans-serif;
  font-size: 0.88rem;
  background-color: $color-background;
  user-select: none;
  overflow: hidden;
  color: $color-dark;
}

.container {
  display: grid;
  width: 96%;
  margin: 0 auto;
  gap: 1.8rem;
  grid-template-columns: 14rem auto 23rem;
  background: $color-background;

  a {
    color: $color-dark;
  }

  h1 {
    font-weight: 800;
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  h3 {
    font-size: 0.87rem;
  }

  h4 {
    font-size: 0.8rem;
  }

  h5 {
    font-size: 0.77rem;
  }

  small {
    font-size: 0.75rem;
  }

  .profile-photo {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .text-muted {
    color: $color-info-dark;
  }
  p {
    color: $color-dark-variant;
  }
  b {
    color: $color-dark;
  }

  .primary {
    color: $color-primary;
  }
  .danger {
    color: $color-danger;
  }
  .success {
    color: $color-success;
  }
  .warning {
    color: $color-warning;
  }

  aside {
    height: 100vh;

    h3 {
      font-weight: 500;
    }
  }

  main {
    margin-top: 1.4rem;

    .date {
      display: inline-block;
      background: $color-light;
      border-radius: $border-radius-1;
      margin-top: 1rem;
      padding: 0.5rem 1.6rem;

      input[type="date"] {
        background: transparent;
        color: $color-dark;
      }
    }

    .recent-orders {
      margin-top: 2rem;
      a {
        text-align: center;
        display: block;
        margin: 1rem auto;
        color: $color-primary;
      }
    }
  }

  .right {
    margin-top: 1.4rem;
    .top {
      display: flex;
      justify-content: end;
      gap: 2rem;
      button {
        display: none;
      }
      .theme-toggler {
        background: $color-light;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1.6rem;
        width: 4.2rem;
        cursor: pointer;
        border-radius: $border-radius-1;

        span {
          font-size: 1.2rem;
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          &.active {
            background: $color-primary;
            color: white;
            border-radius: $border-radius-1;
          }
        }
      }
      .profile {
        display: flex;
        gap: 2rem;
        text-align: right;
      }
    }

    .recent-updates {
      margin-top: 1rem;

      h2 {
        margin-bottom: 0.8rem;
      }
    }

    .sales-analytics {
      margin-top: 1rem;

      h2 {
        margin-bottom: 0.8rem;
      }

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
      }

      .add-product {
        height: 1rem;
        background: transparent;
        border: 2px dashed $color-primary;
        color: $color-primary;
        display: flex;
        align-items: center;
        justify-content: center;
        div {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          h3 {
            font-weight: 600;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .container {
    width: 94%;
    grid-template-columns: 7rem auto 23rem;

    main {
      .insights {
        grid-template-columns: 1fr;
        gap: 0;
      }

      .recent-orders {
        width: 94%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin: 2rem 0 0 8.8rem;

        table {
          width: 83vw;

          tbody {
            tr {
              td {
                &:last-child {
                  display: none;
                }
                &:first-child {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    grid-template-columns: 1fr;

    aside {
      position: fixed;
      left: -100%;
      background: $color-white;
      width: 18rem;
      z-index: 3;
      box-shadow: 1rem 3rem 4rem $color-light;
      height: 100vh;
      padding-right: $card-padding;
      transition: 350ms all ease-in-out;

      &.is_expanded {
        left: 0;
      }

      .sidebar {
        .top {
          .logo {
            margin-left: 1rem;
            display: flex;
            align-items: center;
            gap: 0.2rem;
            h2 {
              display: inline;
              margin-bottom: 0.1rem;
            }
          }
        }

        a {
          width: 100%;
          height: 3.4rem;
          h3 {
            display: inline;
          }
          &:last-child {
            position: absolute;
            bottom: 5rem;
          }
        }
      }
    }

    main {
      margin-top: 8rem;
      padding: 0 1rem;

      .recent-orders {
        position: relative;
        margin: 3rem 0 0 0;
        width: 100%;

        table {
          width: 100%;
          margin: 0;
        }
      }
    }

    .right {
      width: 94%;
      margin: 0 auto 4rem;
      .top {
        position: fixed;
        left: 0;
        top: 0;
        align-items: center;
        padding: 0 0.8rem;
        height: 4.6rem;
        background: $color-white;
        width: 100%;
        margin: 0;
        z-index: 2;
        box-shadow: 0 1rem 1rem $color-light;

        .theme-toggler {
          width: 4.4rem;
          position: absolute;
          left: 66%;
        }
        .profile {
          .info {
            display: none;
          }
        }
        #menu-btn {
          display: inline-block;
          background: transparent;
          cursor: pointer;
          color: $color-dark;
          position: absolute;
          left: 1rem;

          span {
            font-size: 2rem;
          }
        }
      }
    }
  }
}
</style>
