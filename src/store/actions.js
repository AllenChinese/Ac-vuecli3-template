export default {
  /** 全局 loading 状态 */
  a_update_publicLoading_status: async ({ commit }, isLoading) => {
    await commit('M_UPDATE_PUBLICLOADING_STATUS', isLoading)
  },
}
