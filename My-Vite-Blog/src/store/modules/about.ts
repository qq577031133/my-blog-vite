import {Commit } from 'vuex'
export interface aboutState {
  count: number
}
const state: aboutState ={
    count:0
}
const mutations = {
  INCREMENT (state:aboutState){
    state.count++
  }
}

const actions = {
  increment(context: { commit: Commit, state: aboutState }){
    context.commit('INCREMENT')
  }
}

export default {
  namespace:true,
  state,
  mutations,
  actions
}