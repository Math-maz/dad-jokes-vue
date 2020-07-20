<template>
  <li>
    <p>{{ title }}</p>
    <div class="votes-container">
      <i class="fas fa-arrow-up arrow-up" @click="upvote"></i>
      <div class="likes">{{ numOfLikes }}</div>
      <div class="fas fa-arrow-down arrow-down" @click="downvote"></div>
    </div>
  </li>
</template>

<script>
  export default {
    name: "Joke",
    props: {
      title: { type: String, default: "No joke Provided" },
      numOfLikes: { type: Number, default: 0 },
      jokeId: { type: String, default: "" },
    },
    data() {
      return {
        id: this.jokeId,
      };
    },
    methods: {
      upvote() {
        this.$store.commit("jokes/upvote", this.id);
      },
      downvote() {
        this.$store.commit("jokes/downvote", this.id);
      },
    },
  };
</script>

<style>
  li {
    width: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .votes-container {
    display: flex;
  }
  .likes {
    margin: 10px;
    min-width: 36px;
    min-height: 36px;
    padding: 5px 0;
    text-align: center;

    border: 1px solid #ddd;
    border-radius: 100%;
  }
  .arrow-up,
  .arrow-down {
    display: flex;
    place-items: center;
    margin: 10px;
    cursor: pointer;
    padding: 8px 0;
  }
</style>
