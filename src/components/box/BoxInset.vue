<template>
  <div class="box" :style="this.$attrs.customStyle">
    <div class="detail">
      <div class="detail-num">{{num}}</div>
      <div class="detail-title">{{title}}</div>
    </div>
    <div class="inner-box inner-box-1" :style="this.$attrs.customStyle"></div>
    <div class="inner-box inner-box-2" :style="this.$attrs.customStyle"></div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'BoxInset',
  props: ['num', 'title'],
  data () {
    return {}
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
  .box
    position: relative
    width 125px
    height: 73px
    border:none
    border-left:1px solid
    border-top:1px solid
    .detail
      height 100%
      display flex
      flex-direction column
      align-items center
      justify-content space-between
      .detail-num
        font-size 20px
      .detail-title
        font-size 18px
    .inner-box
      position: absolute
      &.inner-box-1
        width 10px
        height: 63px
        right 0
        top 0
        border-right:1px solid
        border-bottom:1px solid
      &.inner-box-2
        width 115px
        height: 10px
        left: 0
        bottom: 0
        border-right:1px solid
        border-bottom:1px solid
</style>
