import { reactive } from "vue";

export const cardsData = reactive([
  {
    name: "Total Sales",
    amount: "$12,025",
    percentage: "81%",
    icon: "analytics",
    color: "blue",
  },
  {
    name: "Total Expenses",
    amount: "$14,071",
    percentage: "62%",
    icon: "bar_chart",
    color: "red",
  },
  {
    name: "Total Income",
    amount: "$25,762",
    percentage: "44%",
    icon: "stacked_line_chart",
    color: "green",
  },
]);

export const productOrders = reactive([
  {
    productName: "Foldable Mini Drone",
    productNumber: "6598",
    paymentStatus: "Due",
    shipping: "Pending",
  },
  {
    productName: "LARVENDER KF102 Drone",
    productNumber: "14589",
    paymentStatus: "Refunded",
    shipping: "Declined",
  },
  {
    productName: "Ruko F11 Pro Drone",
    productNumber: "4586",
    paymentStatus: "Due",
    shipping: "Pending",
  },
  {
    productName: "Drone with Camera Drone",
    productNumber: "75896",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
  {
    productName: "GPS",
    productNumber: "38996",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
]);

export const resentUpdates = reactive([
  {
    name: "Jolina Angelina",
    product: "Night Lion Tech GSP",
    time: "2",
    img: "/assets/avatar1.svg",
  },
  {
    name: "David Wilson",
    product: "Foldable Mini Drone",
    time: "14",
    img: "/assets/avatar3.svg",
  },
  {
    name: "Evelyn Scott",
    product: "Ruko F11 Pro Drone",
    time: "21",
    img: "/assets/avatar4.svg",
  },
]);

export const salesAnalytics = reactive([
  {
    icon: "shopping_cart",
    title: "ONLİNE ORDERS",
    percentage: "+39",
    number: "3849",
    color: "online",
  },
  {
    icon: "local_mall",
    title: "OFFLINE ORDERS",
    percentage: "-17",
    number: "1100",
    color: "offline",
  },
  {
    icon: "person",
    title: "NEW CUSTOMERS",
    percentage: "+25",
    number: "849",
    color: "customers",
  },
]);
