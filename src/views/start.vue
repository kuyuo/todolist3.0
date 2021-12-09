<template>
  <div>
    <button @click="start">开始任务</button>
  </div>
</template>

<script>
import { defineComponent } from "vue"
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'start',
  setup() {
    let router = useRouter()
    let start = () => {
      // router.push('/home')
      router.push({
        // path: '/home',
        // query: {
        //   id: 1
        // }
        name: 'Home',
        params: { //params传参路由只能用name不能用path
          id: 1
        }
      })
    }
    return {
      start
    }
  }
})
</script>

<style lang="scss" scoped>
</style>