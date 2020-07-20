<template>
  <div class="sidebar-root">
    <h1><span>Dad</span> Jokes</h1>
    <img
      src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
    />
    <button @click="loadJokes">
      {{ buttonMessage }}
    </button>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "JokeListSidebar",
    computed: {
      loadingJoke() {
        return this.$store.state.jokes.loadingJokes;
      },
      numOfJokes() {
        return this.$store.state.jokes.numOfJokes;
      },
      buttonMessage() {
        return this.loadingJoke ? "Carregando" : "New Jokes";
      },
    },
    methods: {
      async loadJokes() {
        this.$store.commit("jokes/setLoading", true);
        for (let i = 0; i < Number(this.numOfJokes); i++) {
          const res = await axios.get("https://icanhazdadjoke.com/", {
            headers: {
              Accept: "application/json",
            },
          });
          this.$store.commit("jokes/add", {
            id: res.data.id,
            text: res.data.joke,
          });
        }
        this.$store.commit("jokes/setLoading", false);
      },
    },
  };
</script>

<style scoped>
  .sidebar-root {
    height: 100%;
    width: 30%;
    background: #9575cd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    text-align: center;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1),
      inset 0 0 25px #7e57c2;
  }
  img {
    width: 80%;
  }
  button {
    font-size: 1.5rem;
    width: 60%;
    border-radius: 2rem;
    padding: 1rem 1rem;
    margin: 2rem;
    transition: 0.8s cubic-bezier(0.2, 1, 0.2, 1);
    background: linear-gradient(
      135deg,
      rgba(179, 229, 252, 1) 0%,
      rgba(179, 229, 252, 1) 50%,
      rgba(240, 98, 146, 1) 50%,
      rgba(240, 98, 146, 1) 100%
    );
    color: white;
    font-weight: 700;
    border: none;
    outline: none;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
    word-spacing: 1rem;
    cursor: pointer;
  }
</style>
