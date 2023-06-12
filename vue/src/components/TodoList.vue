<template >
  <div class="list">
    <TodoItem v-for="item of items"
              :item="item"
              :key="item.id"
              v-bind="$attrs"
    />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    TodoItem
  },
  props: {
    items: Array,
  }
})
</script>

<style scoped>
  .list {
    display: flex;
    flex-direction: column;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
</style>
