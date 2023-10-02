const app = Vue.createApp({
  data() {
    return {
      books: [
        {
          title: "title1",
          author: "author1",
          img: "./assets/img/1.png",
          isFav: true,
        },
        {
          title: "title2",
          author: "author2",
          img: "./assets/img/2.png",
          isFav: false,
        },
        {
          title: "title3",
          author: "author3",
          img: "./assets/img/3.png",
          isFav: false,
        },
        {
          title: "title4",
          author: "author4",
          img: "./assets/img/4.png",
          isFav: true,
        },
        {
          title: "title5",
          author: "author5",
          img: "./assets/img/5.png",
          isFav: false,
        },
      ],
    };
  },
});

app.mount("#app");
