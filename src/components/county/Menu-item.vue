<template>
  <div class="item">
    <div class="title">
      <span class="iconfont icon-chanpin_wulianwang"></span>
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
  name: 'Menu',
  props: {
    nameCh: String,
    nameEn: String,
    Num: Number,
    unit: String,
    color: String
  },
  mounted () {
    this.$refs['custom-color'].style.color = this.color
  }
}
</script>

<style lang="stylus" scoped>
  .item
    display: flex
    color #ffffff

    .title
      padding-right 20px
      border-right 1px solid #ffffff
      line-height 20px
      .iconfont
        font-size 20px

    .num-container
      font-size 20px
      margin 0 10px

</style>
