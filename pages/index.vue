<template>
  <div class="root">
    <joke-list :num-of-jokes="numOfJokes"></joke-list>
  </div>
</template>

<script>
  import JokeList from "./JokeList";
  export default {
    name: "Index",
    components: { JokeList },
    head() {
      return {
        title: "Custom title!",
        link: [
          {
            rel: "stylesheet",
            href: "https://use.fontawesome.com/releases/v5.7.1/css/all.css",
          },
        ],
      };
    },
    computed: {
      numOfJokes() {
        return this.$store.state.jokes.numOfJokes;
      },
    },
  };
</script>

<style scoped>
  .root {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
