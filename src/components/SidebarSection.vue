<template>
  <div class="sidebar">
    <div class="top">
      <div class="logo">
        <span class="material-icons-sharp"> diamond </span>
        <h2 class="text-muted">LOGO</h2>
      </div>
      <!-- <div class="close" id="close-btn" @click="$emit('ToggleMenu')">
        <span class="material-icons-sharp"> close </span>
      </div> -->
    </div>

    <a href="#">
      <span class="material-icons-sharp"> grid_view </span>
      <h3>Dashboard</h3>
    </a>
    <a href="#">
      <span class="material-icons-sharp">person_outline </span>
      <h3>Customers</h3>
    </a>
    <a href="#">
      <span class="material-icons-sharp"> receipt_long</span>
      <h3>Orders</h3>
    </a>
    <a href="#">
      <span class="material-icons-sharp"> insights </span>
      <h3>Analytics</h3>
    </a>
    <a href="#">
      <span class="material-icons-sharp"> mail_outline </span>
      <h3>Messages</h3>
      <span class="message-count">7</span>
    </a>
    <a href="#">
      <span class="material-icons-sharp"> inventory </span>
      <h3>Products</h3>
    </a>
    <a href="#">
      <span class="material-icons-sharp"> report_gmailerrorred </span>
      <h3>Reports</h3>
    </a>
    <a href="#">
      <span class="material-icons-sharp"> settings </span>
      <h3>Settings</h3>
    </a>
    <a href="#">
      <span class="material-icons-sharp"> add </span>
      <h3>Add Product</h3>
    </a>
    <a href="#">
      <span class="material-icons-sharp"> logout </span>
      <h3>Logout</h3>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  background: transparent;
  display: flex;
  flex-direction: column;
  height: 86vh;
  position: relative;
  top: 3rem;

  .top {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.8rem;
    margin-top: -1rem;

    .logo {
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      gap: 0.2rem;
      .span {
        width: 2rem;
        height: 2rem;
      }
      h2 {
        margin-bottom: 0.1rem;
      }
    }
  }

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

@media screen and (max-width: 1200px) {
  .sidebar {
    .top {
      .logo {
        h2 {
          display: none;
        }
      }
    }
    a {
      width: 5.6rem;
      h3 {
        display: none;
      }

      &:last-child {
        position: relative;
        margin-top: 1.8rem;
      }
    }
  }
}
</style>
