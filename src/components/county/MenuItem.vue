<template>
  <div class="item">
    <span ref="icon" class="iconfont" :class="iconClass"></span>
    <div class="title">
      <div class="name-ch">{{nameCh}}</div>
      <div class="name-en">{{nameEn}}</div>
    </div>
    <div class="num-container">
      <span class="num" ref="custom-color">{{Num}}</span><span class="unit">{{unit}}</span>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'Menu',
  props: {
    nameCh: String,
    nameEn: String,
    Num: Number,
    unit: String,
    color: String,
    iconClass: String
  },
  mounted () {
    this.$refs['custom-color'].style.color = this.color
    this.$refs['icon'].style.color = this.color
  }
}
</script>

<style lang="stylus" scoped>
  .item
    display: flex
    justify-content flex-start
    align-items center
    font-size 19px
    height 34px
    margin 18px 0
    .title
      border-right 1px solid #ffffff
      display flex
      flex-direction column
      justify-content space-between
      position: relative
      width 100px
      &:before,&:after
        content ""
        width 1px
        height 3px
        position absolute
        right -2px
        background-color #ffffff
      &:after
        bottom 0
      .name-en
        font-size 12px
      .name-ch
        letter-spacing: 2px;
        font-size: 17px;
    .iconfont
      font-size 34px
      margin 0 10px
    .num-container
      font-size 20px
      margin 0 10px
      .num
        margin 0 10px
      .unit
        font-size 13px

</style>
