<template>
  <li>
    <p>{{ title }}</p>
    <div class="votes-container">
      <i class="fas fa-arrow-up arrow-up" @click="upvote"></i>
      <div :style="likesStyle">{{ numOfLikes }}</div>
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
    computed: {
      numLikes() {
        return this.numOfLikes;
      },
      likesStyle() {
        return {
          margin: "10px",
          padding: "5px 0",
          minWidth: "36px",
          minHeight: "36px",
          borderRadius: "100%",
          textAlign: "center",
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: this.getBorderColor(),
        };
      },
    },
    mounted() {
      this.$nextTick(function () {
        this.likesStyle.borderColor = this.getBorderColor();
      });
    },
    methods: {
      upvote() {
        this.likesStyle.borderColor = this.getBorderColor();
        this.$store.commit("jokes/upvote", this.id);
      },
      downvote() {
        this.likesStyle.borderColor = this.getBorderColor();
        this.$store.commit("jokes/downvote", this.id);
      },
      getBorderColor() {
        const numOfLikes = Number(this.numOfLikes);
        console.log(numOfLikes);
        if (numOfLikes > 20) {
          return "#19a654";
        } else if (numOfLikes > 15) {
          return "#bfc21b";
        } else if (numOfLikes > 5) {
          return "#c24d1b";
        } else if (numOfLikes === 0) {
          return "#ddd";
        } else {
          return "#bd1717";
        }
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
