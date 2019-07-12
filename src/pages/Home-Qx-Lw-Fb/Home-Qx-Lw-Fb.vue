<template>
  <div class="county">
    <head-title></head-title>
    <tool-bar></tool-bar>
    <county-content></county-content>

  </div>
</template>

<script>
import HeadTitle from '../../components/HeadTitle'
import ToolBar from '../../components/ToolBar'
import CountyContent from './Content'

export default {
  name: 'Home-Qx-Lw-Fb',
  components: {
    CountyContent,
    HeadTitle,
    ToolBar
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../common/styl/variables.styl"

  .county
    padding: 30px 32px 16px 32px
    color: $textColor-default
    position: relative
</style>
