<template>
    <div class="wx-content">
      <div style="width:500px;height:500px" ref="chart"></div>
    </div>
</template>

<script>
const echarts = require('echarts');
export default {
  data () {
    return {

    }
  },
  methods: {
initCharts () {
let myChart = echarts.init(this.$refs.chart);
// 绘制图表
myChart.setOption({
title: { text: '在Vue中使用echarts' },
tooltip: {},
xAxis: {
data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
},
yAxis: {},
series: [{
name: '销量',
type: 'bar',
data: [5, 20, 36, 10, 10, 20]
}]
});
}
},
mounted () {
this.initCharts();
}
}
</script>

<style lang="stylus" scoped>
.wx-content
  height 551px
  width 597px
  color rgba(255,255,255,.9)
  border 20px solid transparent
  border-image url(http://www.imaoda.com/s/img/tpl/border.png) 5%
  background rgba(0,0,0,.3)
</style>
