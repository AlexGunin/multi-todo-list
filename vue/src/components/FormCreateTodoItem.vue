<template>
  <div>
    <input type="text" v-model="text" @input="onChange"/>
    <button @click="onCreate">+</button>
  </div>
</template>

<script>
export default {
  name: 'FormCreateTodoItem',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    onChange(e) {
      this.text = e.target.value
    },
    onCreate() {
      if(!this.text) return
      this.$emit('createTodoItem', this.text)
      this.text = ''
    }
  }
}
</script>

<style scoped>
</style>
