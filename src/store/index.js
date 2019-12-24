/**  store 主文件入口 */
import Vue from 'vue'
import Vuex from 'vuex'

/** 全局相关 */
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

/** 业务相关 */
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
  },
  state,
  getters,
  mutations,
  actions,
})
