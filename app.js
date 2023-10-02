const app = Vue.createApp({
  data() {
    return {
      info1: "info1",
      info2: "info2",
      number: 0,
      showInfos: true,
      buttonTitle: "Hide Infos",
    };
  },
  methods: {
    showHide() {
      this.showInfos = !this.showInfos;
      this.buttonTitle = this.showInfos ? "Hide Infos" : "Show Infos";
    },
  },
});

app.mount("#app");
