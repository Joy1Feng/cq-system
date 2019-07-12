<template>
  <div class="tool">
    <custom-date></custom-date>
  </div>
</template>

<script>
import CustomDate from './CustomDate'
export default {
  name: 'Tools',
  data () {
    return {}
  },
  components: {
    CustomDate
  }
}
</script>

<style lang="stylus" scoped>
.tool
  position absolute
  top 30px
  right: 32px


</style>
