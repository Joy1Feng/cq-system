<template>
  <div class="cc-wrap">
    <rateleft></rateleft>
    <ratesort></ratesort>
  </div>
</template>

<script>
import Ratesort from './Ratesort'
import Rateleft from './Rateleft'
export default {
  name: 'Home-Rate',
  data(){
   return {
   }
  },
  components: {
    Ratesort,
    Rateleft
  },
}
</script>

<style lang="stylus">
  .cc-wrap
    background url("img/1.png") no-repeat
    background-size cover
    width 1902px
    height 1080px
</style>
