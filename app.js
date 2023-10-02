const app = Vue.createApp({
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
  methods: {
    mouseOver(e) {
      console.log("type: " + e.type);
    },
    mouseLeave(e) {
      console.log("type: " + e.type);
    },
    dblClick(e, extraParameter) {
      console.log("type: " + e.type + " extra parameter: " + extraParameter);
    },
    mouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
