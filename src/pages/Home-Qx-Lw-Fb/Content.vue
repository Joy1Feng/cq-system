<template>
  <div class="content">
    <div class="menu">
      <menu-item :key="index" v-for="(item,index) of menuList" :nameCh="item.nameCh" :nameEn="item.nameEn" :Num="item.Num" :unit="item.unit" :color="item.color"></menu-item>
    </div>
  </div>
</template>

<script>
import MenuItem from '@/components/county/Menu-item'

export default {
  name: 'content',
  data () {
    return {
      menuList: [
        {
          nameCh: '联网区县',
          nameEn: 'QuXian',
          Num: 23,
          unit: '个',
          color: 'blue'
        },
        {
          nameCh: '联网单位',
          nameEn: 'DanWei',
          Num: 2540,
          unit: '个',
          color: 'orange'
        },
        {
          nameCh: '区县联网率',
          nameEn: 'LianWang',
          Num: 50,
          unit: '%',
          color: 'green'
        }
      ]
    }
  },
  components: {
    MenuItem
  }
}
</script>

<style lang="stylus" scoped>
  .content
    position: fixed
    width 400px
    height 600px
    border 1px solid #ccc
    right 0
    bottom 50px
</style>
