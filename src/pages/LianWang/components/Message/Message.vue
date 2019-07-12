<template>
        <div class="yj-message">
            <div class="yj-content">
              <div class="yj-title yj-title-one">
                <i class="iconfont icon-huojing"></i>
                <h2>当日火警</h2>
                <p>0</p>
              </div>
              <div class="yj-title yj-title-two">
                <i class="iconfont icon-weizhenggaiyinhuan"></i>
                <h2>当日隐患</h2>
                <p>235</p>
              </div>
              <div class="yj-title yj-title-three">
                <i class="iconfont icon-windmill"></i>
                <h2>气象信息</h2>
                <div class="yj-title-message">
                  <div class="yj-title-message-top">
                    <span>风向</span>
                    <span>风力</span>
                    <span>湿度</span>
                  </div>
                  <div class="yj-title-message-bottom">
                    <span>东南风</span>
                    <span class="yj-span-two">1~3级</span>
                    <span>21%</span>
                  </div>
                </div>
              </div>
              <div class="yj-title yj-title-four">
                <i class="iconfont icon-weibiaoti-"></i>
                <h2>警情联动</h2>
                <p>2222222111</p>
                <div class="yj-title-more">
                  <div class="yj-title-more-top">
                    <li class="yj-more">更多</li>
                    <li>1/ 2018年7月28日15: 25: 03</li>
                    <li>朱沱镇港桥新天地小区发生火灾</li>
                  </div>
                  <div class="yj-title-more-bottom">
                    <li>2/ 2018年7月28日12: 23: 11</li>
                    <li>中山路街道重庆文理学院发生交通事故 </li>
                  </div>
                </div>
              </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "Message"
    }
</script>

<style lang="stylus" scoped>
    .yj-message
      width 428px
      height 100%
      position relative
      top 0
      left 0
      /*background pink*/
      .yj-content
        position absolute
        top 175px
        left 34px
        .yj-title
          i
            display inline-block
            font-size 33px
            line-height 0
          h2
            display inline-block
            font-size 26px
            line-height 26px
            position relative
            top -2px
            margin-left 8px
          p
            display inline-block
            font-size 26px
            line-height 26px
            position relative
            top -2px
            margin-left 25px
        .yj-title-one
          color #fe0100
          margin-bottom 14px
        .yj-title-two
          color #fffd00
          margin-bottom 10px
        .yj-title-three
          color #00feff
        .yj-title-message
          margin-left 46px
          font-size 17px
          line-height 17px
          .yj-title-message-top
            margin 4px 0 8px 0
            span
              margin-right 34px
          .yj-title-message-bottom
            .yj-span-two
              margin 0 20px 0 16px
        .yj-title-four
          color #d1e2e5
          margin-top 19px
          .yj-title-more
            border 1px solid #d1e2e5
            border-radius 6px
            height 103px
            width 346px
            margin 9px 0 0 48px
            position relative
            .yj-title-more-top
              margin 21px 0 0 13px
              border-bottom 1px dotted #d1e2e5
              width 330px
              .yj-more
                display inline-block
                font-size 13px
                line-height 13px
                padding 2px 6px
                border 1px solid #d1e2e5
                border-radius 2px
                position absolute
                top 4px
                right 4px
              li
                list-style none
                font-size 14px
                line-height 14px
                color #d1e2e5
                padding-bottom 5px
            .yj-title-more-bottom
              margin 5px 0 0 13px
              li
                list-style none
                font-size 14px
                line-height 14px
                color #d1e2e5
                padding-bottom 5px
</style>
