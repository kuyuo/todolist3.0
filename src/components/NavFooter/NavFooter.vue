<template>
  <div class="container">
    <div>已完成{{ isComplete }}/全部{{ list.length }}</div>
    <button v-if="isComplete > 0" @click="clear">清除已完成</button>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: 'navFooter',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  setup(props, ctx) {
    let isComplete = computed(() => {
      return props.list.filter(item => item.complete === true).length;
    })
    const clear = () => {
      ctx.emit('clear', props.list.filter(item => item.complete === false))
    }
    return {
      isComplete,
      clear
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  button {
    margin-left: 10px;
  }
}
</style>