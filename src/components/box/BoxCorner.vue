<template>
  <div class="box">
    <div class="inner-box box-1"></div>
    <div class="inner-box box-2"></div>
    <div class="inner-box box-3"></div>
    <div class="inner-box box-4"></div>
    <slot name="main"></slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'Box',
  props: {
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../common/styl/variables.styl"
  .box
    border 1px solid #055866
    position: relative
    box-sizing border-box
    background-color $boxCorner-bgColor
    padding 10px 16px
    .inner-box
      position absolute
      border 1px solid #00ffff
      width 20px
      height 9px
      &.box-1
        left -1px
        top -1px
        border-right-color: transparent
        border-bottom-color: transparent

      &.box-2
        right -1px
        top -1px
        border-left-color: transparent
        border-bottom-color: transparent

      &.box-3
        left -1px
        bottom -1px
        border-top-color: transparent
        border-right-color: transparent

      &.box-4
        right -1px
        bottom: -1px
        border-left-color: transparent
        border-top-color: transparent
</style>
