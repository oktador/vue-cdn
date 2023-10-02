const app = Vue.createApp({
  data() {
    return {
      info1: "info1",
      info2: "info2",
      number: 0,
    };
  },
  methods: {
    increaseNumber() {
      this.number++;
    },
    decreaseNumber() {
      this.number--;
    },
    changeInfo1(info) {
      this.info1 = info;
    },
  },
});

app.mount("#app");
