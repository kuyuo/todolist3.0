import { createStore } from 'vuex'

export default createStore({
  state: {
    list:[
      {
        title: '吃饭',
        complete: false
      },
      {
        title: '睡觉',
        complete: false
      },
      {
        title: '打代码',
        complete: true
      },
    ]
  },
  mutations: {
    addToDo(state,payload){
      state.list.push(payload)
    },
    delToDo(state,payload){
      state.list.splice(payload,1)
    },
    clear(state,payload){
      state.list = payload
    }
  },
  actions: {
  },
  modules: {
  }
})