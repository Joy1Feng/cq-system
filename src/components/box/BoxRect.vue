<template>
  <div class="box">
    <div
      class="rect"
      :style=this.$attrs.rectStyle
    ></div>
    <ul class="county-main-container">
      <li class="county-name number">{{countyMain.county}}</li>
      <li>
        <span class="people number">{{countyMain.people}}</span>万
        <div>常驻人口</div>
      </li>
      <li>
        <span class="street number">{{countyMain.street}}</span>个
        <div>街道/镇</div>
      </li>
      <li>
        <span class="building number">{{countyMain.building}}</span>栋
        <div>高层建筑</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'BoxRect',
  props: ['countyMain'],
  data () {
    return {}
  },
  mounted () {
    console.log(this.countyMain)
  }
}
</script>

<style lang="stylus" scoped>
  .box
    position: relative
    border: 1px solid
    padding 20px 40px

    .rect
      position: absolute
      width: 10px
      height: 10px
      top: 0
      left: 0
    .county-main-container
      height 100%
      display: flex
      flex-direction column
      justify-content space-between
      li
        font-size 18px
        line-height 24px
        letter-spacing 2px
      .number
        font-size 20px

</style>
