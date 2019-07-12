<template>
  <div class="cc-right">
    <div class="cc-title">
      <i class="cc-icon iconfont icon-lianwang"></i>
      <p class="cc-street">中山路街道</p>
    </div>
    <div class="cc-choice">
      <el-radio-group class="cc-ooo" v-model="radio">
        <el-radio :label="3">风险类型</el-radio>
        <el-radio :label="6">监管类型</el-radio>
        <el-radio :label="9">行业类型</el-radio>
      </el-radio-group>
    </div>
    <div class="cc-sort">
      <div class="cc-sort-1">
        <span class="cc-sort-titel">高层建筑</span>
        <span class="cc-sort-Percentage">21%</span>
      </div>
      <div class="cc-sort-1">
        <span class="cc-sort-titel">公共娱乐场所</span>
        <span class="cc-sort-Percentage">15%</span>
      </div>
      <div class="cc-sort-1">
        <span class="cc-sort-titel">地下建筑</span>
        <span class="cc-sort-Percentage">2%</span>
      </div><div class="cc-sort-1">
      <span class="cc-sort-titel">石油化工</span>
      <span class="cc-sort-Percentage">4%</span>
    </div><div class="cc-sort-1">
      <span class="cc-sort-titel">商业综合体</span>
      <span class="cc-sort-Percentage">3%</span>
    </div><div class="cc-sort-1">
      <span class="cc-sort-titel">养老场所</span>
      <span class="cc-sort-Percentage">20%</span>
    </div><div class="cc-sort-1">
      <span class="cc-sort-titel">文物古建筑</span>
      <span class="cc-sort-Percentage">1%</span>
    </div><div class="cc-sort-1">
      <span class="cc-sort-titel">医院</span>
      <span class="cc-sort-Percentage">8%</span>
    </div><div class="cc-sort-1">
      <span class="cc-sort-titel">学校</span>
      <span class="cc-sort-Percentage">23%</span>
    </div><div class="cc-sort-1">
      <span class="cc-sort-titel">其他</span>
      <span class="cc-sort-Percentage">2%</span>
    </div><div class="cc-sort-1">
      <span class="cc-sort-titel">劳动密集型企业</span>
      <span class="cc-sort-Percentage">3%</span>
    </div><div class="cc-sort-1">
      <span class="cc-sort-titel">高层建筑</span>
      <span class="cc-sort-Percentage">3%</span>
    </div>
      <div class="cc-circular">
        <div class="cc-circular2">
          <div class="cc-circular3">
            <div class="cc-circular4">
              <p class="cc-cir-p">单位总是</p>
              <span class="cc-cir-span">58</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cc-sort-bottom">
      <div>
        <div><i></i></div>
        <div>
          <p></p>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Ratesort",
      data() {
          return {
            radio: '1',
          }
      }
    }
</script>

<style lang="stylus" scoped>
  .cc-right
    width 1231px
    height 773px
    background rgba(5, 24, 38, .5)
    color: rgba(255, 255, 255, .9)
    border: 20px solid transparent
    border-image: url(http://www.imaoda.com/s/img/tpl/border.png) 10%
    position relative
    top -590px
    left 666px
    .cc-title
      .cc-icon
        width 27px
        height 32px
      .cc-street
        font-size 23px
        margin-bottom 28px
    .cc-choice
      .cc-ooo
        .el-radio
          color #a3a7a8
    .cc-sort
      height 610px
      position relative
      .cc-sort-1
        border-radius 50%
        text-align center
        position absolute
        .cc-sort-titel
          display block
          font-size 16px
          margin-top 32%
        .cc-sort-Percentage
          font-size 20px
        &:nth-of-type(1)
          width 135px
          height 135px
          top 112px
          left 65px
          border 1px solid #dcc600
        &:nth-of-type(2)
          width 115px
          height 115px
          top 56px
          left 273px
          border 1px solid #02495f
        &:nth-of-type(3)
          width 89px
          height 89px
          top 216px
          left 225px
          border 1px solid #b595e8
        &:nth-of-type(4)
          width 100px
          height 100px
          top 347px
          left 136px
          border 1px solid #02495f
        &:nth-of-type(5)
          width 90px
          height 90px
          top 335px
          left 279px
          border 1px solid #e38d02
        &:nth-of-type(6)
          width 138px
          height 138px
          top 459px
          left 230px
          border 1px solid #86b41d
        &:nth-of-type(7)
          width 86px
          height 86px
          top 50px
          right 341px
          border 1px solid #163428
        &:nth-of-type(8)
          width 120px
          height 120px
          top 79px
          right 148px
          border 1px solid #e65457
        &:nth-of-type(9)
          width 168px
          height 168px
          top 168px
          right 241px
          border 1px solid #025d7c
        &:nth-of-type(10)
          width 88px
          height 88px
          top 345px
          right 170px
          border 1px solid #9e7a48
        &:nth-of-type(11)
          width 87px
          height 87px
          top 406px
          right 308px
          border 1px solid #3c79d4
        &:nth-of-type(12)
          width 92px
          height 92px
          top 484px
          right 152px
          border 1px solid #7dc778
      .cc-circular
        width 407px
        height 407px
        border-radius 50%
        background rgba(4,37,54,.3)
        position absolute
        top 103px
        left 372px
        .cc-circular2
          width 278px
          height 278px
          border-radius 50%
          background rgba(4,52,74,.3)
          border 3px solid #02c7fe
          position absolute
          top 63px
          left 63px
          .cc-circular3
            width 192px
            height 192px
            border-radius 50%
            background rgba(3,67,82,.3)
            border 2px solid #04485d
            position absolute
            top 39px
            left 39px
            .cc-circular4
              width 125px
              height 125px
              border-radius 50%
              background rgba(3,67,92,.3)
              border 16px solid #087f9f
              position absolute
              top 31px
              left 31px
              text-align center
              .cc-cir-p
                font-size 15px
                color #ffffff
                margin-top 31px
              .cc-cir-span
                font-size 20px
                color #ffffff
    .cc-sort-bottom
      width 1224px
      background red
</style>
