<template>
  <div>
    <input type="text" placeholder="请输入任务名称" v-model.trim="value" @keydown.enter="enter" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue"
export default defineComponent({
  name: 'navHeader',
  setup(props, ctx) {
    console.log(props);
    let value = ref('')
    let enter = () => {
      ctx.emit('add', { title: value.value, complete: false });
      value.value = ''
    }
    return {
      value,
      enter
    }
  }
})
</script>

<style lang="scss" scoped>
input {
  margin-bottom: 10px;
}
</style>