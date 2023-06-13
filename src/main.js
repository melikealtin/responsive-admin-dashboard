import { createApp } from "vue";
import App from "./App.vue";

import TheCard from "./components/TheCard.vue";
import RecentOrders from "./components/RecentOrders.vue";
import RecentUpdates from "./components/RecentUpdates.vue";
import SalesAnalytics from "./components/SalesAnalytics.vue";

const app = createApp(App);

app
  .component("TheCard", TheCard)
  .component("RecentOrders", RecentOrders)
  .component("RecentUpdates", RecentUpdates)
  .component("SalesAnalytics", SalesAnalytics);

app.mount("#app");
