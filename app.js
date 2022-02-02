const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box){
      box === 'A' ? this.boxASelected = true
      : box === 'B' ? this.boxBSelected = true 
      : box === 'C' ? this.boxCSelected = true;
    }
  }
});
app.mount("#styling");
