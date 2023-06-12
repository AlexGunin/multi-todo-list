<template>
  <div class="container">
    <h1>Tasks List</h1>
    <FormCreateTodoItem @create-todo-item="createItem"/>
    <TodoList :items="todoItems" @change-todo-active="changeTodoActive"/>
    <span>Active todos: {{activeTodos}}</span>
  </div>
</template>

<script>
import FormCreateTodoItem from './components/FormCreateTodoItem.vue'
import TodoList from './components/TodoList.vue'

const creator = (startId = 1) => (text) => ({id: startId++, isActive: false, text, })

const createDefaultTodoItem = creator()

export default {
  name: 'App',
  components: {
    FormCreateTodoItem,
    TodoList
  },
  data() {
    return {
      todoItems: []
    }
  },
  computed: {
    activeTodos() {
      return this.todoItems.filter(todo => !todo.isFinished).length
    }
  },
  methods: {
    createItem(text) {
      this.todoItems.push(createDefaultTodoItem(text))
    },
    changeTodoActive(id) {
      const todoItemIndex = this.todoItems.findIndex(todo => todo.id === id)
      if(todoItemIndex === -1) return
      const todoItem = this.todoItems[todoItemIndex]

      this.todoItems[todoItemIndex] = {...todoItem, isFinished: !todoItem.isFinished}
    }
  }
}
</script>

<style>
  body {
    margin: 0;
  }

  #app {
    display: flex;
    justify-content: center;
    height: 100vh;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap:20px;
    max-width: 1000px;
  }
</style>
