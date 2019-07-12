<template>
  <div class="yj-search">
    <div class="yj-search-input">
      <i class="iconfont icon-fangdajing-copy"></i>
      <input @change="openShow" type="text" placeholder="区域/单位搜索">
    </div>
    <div v-if="isOpen" class="yj-search-select">
      <ul class="yj-first-title">
        <li @click="showOpen">
          <i class="iconfont icon-jianhaoshouqi"></i>
          永川区
        </li>
        <ul v-if="isShow" class="yj-second-title">
          <li>
            <i class="iconfont icon-jiahaozhankai"></i>
            卫星湖街道
          </li>
          <li>
            <i class="iconfont icon-jiahaozhankai"></i>
            茶山竹海街道
          </li>
          <li>
            <i class="iconfont icon-jiahaozhankai"></i>
            大安街道
          </li>
          <li>
            <i class="iconfont icon-jiahaozhankai"></i>
            陈食街道
          </li>
          <li>
            <i class="iconfont icon-jiahaozhankai"></i>
            胜利路街道
          </li>
          <li>
            <i class="iconfont icon-jiahaozhankai"></i>
            南大街街道
          </li>
          <li>
            <i class="iconfont icon-jianhaoshouqi"></i>
            中山路街道
          </li>
          <li>
            <i class="iconfont icon-jiahaozhankai"></i>
            朱沱镇
          </li>
          <li>
            <i class="iconfont icon-jiahaozhankai"></i>
            双石镇
          </li>
          <li>
            <i class="iconfont icon-jiahaozhankai"></i>
            三教镇
          </li>
          <li>
            <i class="iconfont icon-jiahaozhankai"></i>
            青峰镇
          </li>
          <li>
            <i class="iconfont icon-jiahaozhankai"></i>
            五街镇
          </li>
          <li>
            <i class="iconfont icon-jiahaozhankai"></i>
            来苏镇
          </li>
          <li>
            <i class="iconfont icon-jiahaozhankai"></i>
            松溉镇
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
          return {
            isShow: false,
            isOpen: false
          }
        },
       methods: {
          showOpen() {
            this.isShow = !this.isShow
          },
         openShow() {
            this.isOpen = !this.isOpen
         }
       }
    }
</script>

<style lang="stylus" scoped>
  .yj-search
    position absolute
    width 308px
    height 100%
    /*background red*/
    left 322px
    z-index 1
    .yj-search-input
      height 50px
      width 308px
      position relative
      margin-top 175px
      i
        position absolute
        left 17px
        top 0
        font-size 30px
        line-height 50px
        color #b6bdc0
      input
        outline none
        width 308px
        height 50px
        padding-left 64px
        background rgba(0,0,0,.2)
        font-size 17px
        line-height 17px
        color rgba(255,255,255,.9)
        border 10px solid transparent
        border-image url(http://www.imaoda.com/s/img/tpl/border.png) 5%
        background rgba(0,0,0,.3)
    .yj-search-select
      width 308px
      height 724px
      background rgba(0,0,0,.8)
      border 1px solid #404d51
      margin-top 3px
      .yj-first-title
        font-size 17px
        line-height 17px
        color #fefefe
        margin-top 6px
        li
          margin-left 8px
          margin-bottom 13px
          cursor pointer
          i
            font-size 17px
            line-height 0
        .yj-second-title
          li
            color #cacecd
            margin-left 25px
</style>
