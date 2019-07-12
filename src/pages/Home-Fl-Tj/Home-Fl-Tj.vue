<template>
  <div class="wx-content">
      <div class="wx-header"></div>
      <div class="wx-denger">
        <div class="wx-dengerTxt">
          <i class="iconfont icon-huojing"></i>
          <span>当日火警</span>
          <span>0</span>
        </div>
        <div class="wx-dengerTxt">
          <i class="iconfont icon-weizhenggaiyinhuan"></i>
          <span>当日隐患</span>
          <span>235</span>
        </div>
        <div class="wx-dengerTxt">
          <i class="iconfont icon-windmill"></i>
          <span>气象信息</span>
        </div>
        <div class="wx-wind1"><span>风向</span><span>风力</span><span>湿度</span></div>
        <div class="wx-wind2"><span>东南风</span><span>1~3级</span><span>21%</span></div>
      </div>
      <type class="wx-type"></type>
  </div>
</template>

<script>
import type from './components/type/type'
export default {
  name: 'Home-Fl-Tj',
  data () {
    return {}
  },
  components: {
    type
  }
}
</script>

<style lang="stylus">
.wx-content
  position relative
  width 1920px
  height 1080px
  background url('./static/1.png') no-repeat
  background-size cover
  .wx-header
    position absolute
    width 100%
    height 175px
    background pink
    top 0
    left 0
  .wx-denger
    position absolute
    top 175px
    left 32px
    .wx-dengerTxt span
      font-size 26px
    .wx-dengerTxt i
      font-size 32px
    .wx-dengerTxt:nth-of-type(1)
      color red
    .wx-dengerTxt:nth-of-type(2)
      color yellow
    .wx-dengerTxt:nth-of-type(3)
      color #00feff
    .wx-wind1 span
      font-size 18px
      color #00feff
      margin-left 38px
    .wx-wind2 span
      font-size 18px
      color #00feff
    .wx-wind2 span:nth-of-type(1)
      margin-left 38px
    .wx-wind2 span:nth-of-type(2)
      margin-left 20px
    .wx-wind2 span:nth-of-type(3)
      margin-left 25px
  .wx-type
    position absolute
    right 35px
    top 381px
</style>
