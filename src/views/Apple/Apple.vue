<template>
  <div class="Apple">Apple1234</div>
</template>
<script>
import { getAppleList } from '../../http/apis/apple'
export default {
  name: 'Apple',
  methods: {
    async init() {
      let payload = {
        pageSize: 10,
        pageNo: 1,
        name: 'a',
      }
      let res = await getAppleList(payload)
      return res
    },
  },

  mounted() {
    this.init()
  },
}
</script>
<style lang="scss" scoped>
.Apple {
  margin-top: 20vh;
  text-align: center;
  font-size: 32px;
}
</style>
