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
    computed: {
      numOfJokes() {
        return this.$store.state.jokes.numOfJokes;
      },
    },
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
  };
</script>

<style scoped>
  .root {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      135deg,
      rgba(179, 229, 252, 1) 0%,
      rgba(179, 229, 252, 1) 50%,
      rgba(240, 98, 146, 1) 50%,
      rgba(240, 98, 146, 1) 100%
    );
  }
</style>
