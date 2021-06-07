import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animal: '猪',
    unit: '头',
  },
  mutations: {
    CHANGE_ANIMAL(state,animalName) {
      state.animal = animalName
    },
    CHANGE_UNIT(state,animalName) {
      state.unit = animalName
    },
  },
  actions: {
    changeAnimal(context,animalName) {
      context.commit('CHANGE_ANIMAL',animalName)
    },
    changeUnit(context,animalName) {
      context.commit('CHANGE_UNIT',animalName)
    }
  },
  modules: {
  }
})
