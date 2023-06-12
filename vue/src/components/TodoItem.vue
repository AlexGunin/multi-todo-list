<template>
  <div class="item" @click="onChangeActive">
    <input type="checkbox" :checked="item.isFinished"/>
    <span :class="{ finished: item.isFinished}">{{item.text}}</span>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {TodoItemProp} from "@/types/TodoItem";

export default defineComponent({
  props: {
    item: TodoItemProp
  },
  methods: {
    onChangeActive() {
      this.$emit('changeTodoActive', this.item.id)
    }
  }
})
</script>

<style scoped>
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
  }

  .item .finished {
    text-decoration: line-through;
  }
</style>
