<template>
  <div class="home">
    <!-- {{ name }}
    <div @click="clickNum(100)">{{ num }}----{{ num2 }} 和 {{ addNum }}</div>-->
    <!-- {{ list }}
    <button @click="goto">跳转</button>-->
    <nav-header @add="doAdd"></nav-header>
    <nav-main :list="list" @del="doDel"></nav-main>
    <nav-footer :list="list" @clear="doClear"></nav-footer>
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader/NavHeader";
import NavMain from "@/components/NavMain/NavMain";
import NavFooter from "../components/NavFooter/NavFooter.vue";
import { defineComponent, computed, onMounted, onUnmounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router"
// import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  name: "Home",
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },
  computed: {},
  setup() { // 组件创建过程
    {
      // let num = ref(10);
      // let num2 = ref(12);
      // let name = ref("pick");
      // let clickNum = (val) => {
      //   console.log("点击", num.value, val);
      // }
      // let addNum = computed(() => {
      //   return num.value + num2.value
      // })
      // let router = useRouter()
      // console.log(router);
      // let goto = () => {
      //  router.go()
      //  router.back()
      //   router.push({
      //     path: "/about"
      //   })
      //
      // }
    }
    let route = useRoute()
    let store = useStore()
    let inputValue = ref('')
    let list = computed(() => {
      return store.state.list
    })
    let doAdd = (val) => {
      let flag = true
      inputValue.value = val
      if (inputValue.value.title === '') {
        flag = false
        alert("输入不能为空")
      }
      list.value.forEach(item => {
        if (item.title === inputValue.value.title) {
          flag = false;
          alert('已存在')
        }
      })
      flag && store.commit('addToDo', inputValue.value)
      // console.log("触发了父组件", val);
    }
    let doDel = (val) => {
      store.commit('delToDo', val)
    }
    let doClear = (val) => {
      store.commit('clear', val)
    }
    onMounted(() => {
      //组件挂在过程
      // 数据dom..
      // 发送请求
      // 数据初始化操作,接收路由参数

      // 传过来的都要变成字符串
      console.log("mounted");
      console.log('query传参' + route.query.id, 'params传参' + route.params.id);
    })
    onUnmounted(() => {
      // 组件卸载时的生命周期

      //清除定时器 清除闭包函数
      console.log("onUnmounted");
    })
    return {
      // num,
      // num2,
      // name,
      // clickNum,
      // addNum,
      // goto,
      list,
      doAdd,
      doDel,
      doClear
    };
  },
});
</script>
