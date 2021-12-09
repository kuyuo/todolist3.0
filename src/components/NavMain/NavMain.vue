<template>
  <template v-if="list.length > 0">
    <div v-for="(item,index) in list" :key="index">
      <div class="item">
        <input type="checkbox" v-model="item.complete" />
        {{ item.title }}
        <button class="del" @click="del(index)">删除</button>
      </div>
    </div>
  </template>
  <div v-else>暂无数据</div>
</template>
// TODO:checkbox不同步到vuex,这样存在bug
<script>
import { defineComponent } from "vue"
export default defineComponent({
  name: 'navMain',
  emits: ['del'],
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  setup(props, ctx) {
    console.log(props);
    const del = (index) => {
      // console.log(index);
      ctx.emit('del', index);
    }
    return {
      del
    }
  }
})
</script>

<style lang="scss" scoped>
.item {
  height: 35px;
  line-height: 35px;
  position: relative;
  width: 160px;
  button {
    position: absolute;
    right: 20px;
    top: 6px;
    display: none;
    z-index: 99;
  }
  &:hover {
    button {
      display: block;
    }
    background-color: #ccc;
  }
}
</style>