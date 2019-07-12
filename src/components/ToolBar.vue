<template>
  <div class="tool">
    <ul class="list">
      <li class="list-item">
        <custom-date></custom-date>
        <custom-weather :weather="{sub: 20, sup:30}"></custom-weather>
      </li >
      <li class="list-item">
        <ul class="user-list">
          <li class="user">欢迎你:<span class="user-name">系统管理员</span></li>
          <li class="tool-container">
            <ul class="tool-list">
              <li class="tool-item">
                <span class="iconfont icon-shouye"></span>
              </li>

              <li class="tool-item">
                <span class="iconfont icon-fanhui"></span>
              </li>
              <li class="tool-item">
                <span class="iconfont icon-iconset0114"></span>
              </li>
              <li class="tool-item">
                <span class="iconfont icon-shezhi"></span>
              </li>
              <li class="tool-item">
                <span class="iconfont icon-guanji"></span>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import CustomDate from './CustomDate'
import CustomWeather from './CustomWeather'

export default {
  name: 'Tools',
  data () {
    return {}
  },
  components: {
    CustomDate,
    CustomWeather
  }
}
</script>

<style lang="stylus" scoped>
  .tool
    position absolute
    top 30px
    right: 32px
    height: 68px
    font-size 16px

    .list
      display flex
      flex-direction column
      justify-content space-between

      .list-item
        display: flex
        width: 470px
        justify-content  space-between
        .user-list
          display flex
          margin-top 26px
          width: 100%;
          justify-content: space-between;
          .user
            text-align center
            .user-name
              margin-left 13px
          .tool-container
            display flex
            .tool-list
              display: flex
              .iconfont
                font-size inherit
                margin 0 5px
</style>
