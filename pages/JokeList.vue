<template>
  <div class="joke-root">
    <joke-list-side-bar></joke-list-side-bar>

    <div class="joke-list">
      <div v-if="loadingJokes" class="loading">CARREGANDO...</div>
      <ul v-else>
        <joke
          v-for="joke of jokes"
          :key="joke.id"
          :joke-id="joke.id"
          :title="joke.text"
          :num-of-likes="joke.votes"
        ></joke>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import JokeListSideBar from "../components/JokeListSidebar";
  import Joke from "../components/Joke";
  export default {
    name: "App",
    components: { JokeListSideBar, Joke },
    props: { numOfJokes: { type: String, default: "10" } },
    computed: {
      jokes() {
        return this.$store.state.jokes.jokes;
      },
      loadingJokes() {
        return this.$store.state.jokes.loadingJokes;
      },
    },
    async created() {
      this.$store.commit("jokes/setLoading", true);
      while (this.jokes.length < Number(this.numOfJokes)) {
        try {
          const res = await axios.get("https://icanhazdadjoke.com/", {
            headers: {
              Accept: "application/json",
            },
          });
          this.$store.commit("jokes/add", {
            id: res.data.id,
            text: res.data.joke,
          });
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      }
      this.$store.commit("jokes/setLoading", false);

      // res.data.id
      // res.data.joke
    },
  };
</script>

<style scoped>
  .joke-root {
    height: 80%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  .joke-list {
    width: 70%;
    height: 90%;
    background-color: white;

    overflow: scroll;
    overflow-x: hidden;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .loading {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
