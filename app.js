const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      box === "A"
        ? (this.boxASelected = !this.boxASelected)
        : box === "B"
        ? (this.boxBSelected = !this.boxBSelected)
        : box === "C"
        ? (this.boxCSelected = !this.boxCSelected)
        : false;
    },
  },
});
app.mount("#styling");
