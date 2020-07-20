<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo.id)">remove</button>
    </li>
    <li>
      <input placeholder="What needs to be done?" @keyup.enter="addTodo" />
    </li>
  </ul>
</template>

<script>
  import { mapMutations } from "vuex";
  export default {
    computed: {
      todos() {
        return this.$store.state.todos.list;
      },
    },
    methods: {
      addTodo(e) {
        const Id = Math.random() * 7;
        this.$store.commit("todos/add", { text: e.target.value, id: Id });
        e.target.value = "";
      },
      ...mapMutations({ toggle: "todos/toggle" }),
      removeTodo(todoId) {
        console.log(todoId);
        this.$store.commit("todos/edit", { id: todoId, text: "YOU ROCK" });
      },
    },
  };
</script>

<style>
  li {
  }
</style>
