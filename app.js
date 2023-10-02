const app = Vue.createApp({
  //data, functions
  template: "<h3>{{info1}} - {{info2}} - {{number}}</h3>",
  data() {
    return {
      info1: "info1",
      info2: "info2",
      number: 0,
    };
  },
});

app.mount("#app");
