<template>
  <div class="weather">
    <ul class="list">
      <li>
        <span  class="iconfont  icon-tianqi"></span>
      </li>
      <li class="temperature">
        <span class="sub">{{weather.sub}}/{{weather.sup}}</span>
      </li>
      <li class="unit">℃</li>
    </ul>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    'weather': {
      type: Object,
      default: () => {
        return {
          sub: 0,
          sup: 0
        }
      }
    }
  },
  name: 'CustomWeather',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.list
  display: flex
  .iconfont
    font-size inherit
  .temperature
    margin-left 10px
    margin-right: 5px
</style>
