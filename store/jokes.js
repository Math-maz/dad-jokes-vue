export const state = () => ({
  jokes: [],
  loadingJokes: false,
  numOfJokes: "7",
});
export const mutations = {
  add(context, jokeObj) {
    jokeObj.votes = 0;
    context.jokes.push(jokeObj);
  },
  remove(context, jokeId) {
    const filteredJokes = context.jokes.filter((joke) => joke.id !== jokeId);
    context.jokes = filteredJokes;
  },
  toggleLoading(context) {
    context.loadingJokes = !context.loadingJokes;
  },
  setLoading(context, loadingState) {
    context.loadingJokes = loadingState;
  },
  upvote(context, jokeId) {
    const targetJoke = context.jokes.find((joke) => joke.id === jokeId);
    if (targetJoke) {
      targetJoke.votes++;
    }
    context.jokes.sort((a, b) => b.votes - a.votes);
  },
  downvote(context, jokeId) {
    const targetJoke = context.jokes.find((joke) => joke.id === jokeId);
    if (targetJoke) {
      targetJoke.votes--;
    }
    context.jokes.sort((a, b) => b.votes - a.votes);
  },
};
