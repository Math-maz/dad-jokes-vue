<template>
  <b-list-group-item class="d-flex justify-content-between align-items-center">
    <div class="joke-emoji">
      <i :class="emojiName"></i>
    </div>
    <p>{{ title }}</p>
    <div class="votes-container">
      <i class="fas fa-arrow-up arrow-up" @click="upvote"></i>
      <div :style="likesStyle">{{ numOfLikes }}</div>
      <div class="fas fa-arrow-down arrow-down" @click="downvote"></div>
    </div>
  </b-list-group-item>
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
      emojiName() {
        if (this.numOfLikes >= 15) {
          return "em em-rolling_on_the_floor_laughing";
        } else if (this.numOfLikes >= 12) {
          return "em em-laughing";
        } else if (this.numOfLikes >= 9) {
          return "em em-smiley";
        } else if (this.numOfLikes >= 6) {
          return "em em-slightly_smiling_face";
        } else if (this.numOfLikes >= 3) {
          return "em em-neutral_face";
        } else if (this.numOfLikes >= 0) {
          return "em em-confused";
        } else {
          return "em em-angry";
        }
      },
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
        // this.likesStyle.borderColor = this.getBorderColor();
        this.$store.commit("jokes/upvote", this.id);
      },
      downvote() {
        // this.likesStyle.borderColor = this.getBorderColor();
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
  p {
    margin: 0;
  }
  .votes-container {
    display: flex;
  }
  .likes {
    margin: 5px;
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
  .joke-emoji {
    font-size: 1.5rem;
    margin-right: 10px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }
</style>
