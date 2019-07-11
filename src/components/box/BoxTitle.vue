<template>
  <div class="title">
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'BoxTitle',
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      default: '标题'
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  font-size 24px
  line-height:24px
</style>
