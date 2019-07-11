<template>
  <div class="content">
    <div class="menu">
      <menu-item
        :key="index"
        v-for="(item,index) of menuList"
        :nameCh="item.nameCh"
        :nameEn="item.nameEn"
        :Num="item.Num"
        :unit="item.unit"
        :color="item.color"
        :iconClass="item.iconClass"
      ></menu-item>
    </div>
    <box-corner :style="{width: '100%',height: '297px'}">
      <div class="main" slot="main">
        <box-title class="box-title" text="基本信息"></box-title>
        <div class="inner-content">
          <box-rect
            :style="{borderColor: '#01ffff',width: '166px',height:'247px'}"
            :rectStyle="{left: '0',top: '0',width:'16px',height:'16px',backgroundColor:'#01ffff'}"
            :countyMain="countyMain"
          >
          </box-rect>
          <div class="content-right">
            <!--<box-inset v-for="(item,index) in contentClassify" :key="index" :customStyle="item.customStyle" :num="item.num" :title="item.title"></box-inset>-->
          </div>
        </div>
      </div>
    </box-corner>
  </div>
</template>

<script>
import MenuItem from '../../components/county/MenuItem'
import BoxCorner from '../../components/box/BoxCorner'
import BoxTitle from '../../components/box/BoxTitle'
import BoxRect from '../../components/box/BoxRect'
import BoxInset from '../../components/box/BoxInset'

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
          color: '#50fefd',
          iconClass: 'icon-chanpin_wulianwang'
        },
        {
          nameCh: '联网单位',
          nameEn: 'DanWei',
          Num: 2540,
          unit: '个',
          color: '#ff6902',
          iconClass: 'icon-jianzhu'
        },
        {
          nameCh: '区县联网率',
          nameEn: 'LianWang',
          Num: 50,
          unit: '%',
          color: '#04ff00',
          iconClass: 'icon-icon-load'
        }
      ],
      contentClassify: [{
        num: 4,
        title: '消防中队',
        customStyle: {borderColor: '#f2380f'}
      },
      {
        num: 25,
        title: '微型消防站',
        customStyle: {borderColor: '#da1fc6'}
      },
      {
        num: 98,
        title: '消防监控室',
        customStyle: {borderColor: '#72d2fc'}
      },
      {
        num: 95,
        title: '高危单位',
        customStyle: {borderColor: '#43f0c2'}
      },
      {
        num: 549,
        title: '重点单位',
        customStyle: {borderColor: '#fffe01'}
      },
      {
        num: 3285,
        title: '一般单位',
        customStyle: {borderColor: '#08b2ff'}
      },
      {
        num: 6,
        title: '联网街道',
        customStyle: {borderColor: '#9bacb3'}
      },
      {
        num: 95,
        title: '联网单位',
        customStyle: {borderColor: '#9bacb3'}
      },
      {
        num: '50%',
        title: '联网率',
        customStyle: {borderColor: '#9bacb3'}
      }
      ],
      countyMain: {
        county: '永川',
        people: 120,
        street: 23,
        building: 685
      }
    }
  },
  components: {
    MenuItem,
    BoxTitle,
    BoxCorner,
    BoxRect,
    BoxInset
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../common/styl/variables.styl"
  .content
    position: fixed
    width 596px
    height 600px
    right 35px
    bottom 74px
    color: $textColor-default
    .menu
      width 290px
    .inner-content
      margin-top 8px
      display flex
      justify-content space-between
      .content-right
        flex 1
        display flex
        justify-content space-around
        height 247px
</style>
