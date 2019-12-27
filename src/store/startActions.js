// Each action should be dispatch in every page route before
// formatter a_start_{pageName} pageName from routerConfig file
// formatter a_start_apple
export default {
  a_start_apple: async ({ dispatch }, { query, params }) => {
    console.log('a_start_apple')
  },
}
