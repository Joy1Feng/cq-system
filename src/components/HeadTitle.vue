<template>
  <div class="head">
    <div class="title">
      <img src="../assets/image/icon-head.png" alt="">
      <div class="title-name">
        <div class="name-ch">重庆市永川区城市消防远程监控系统</div>
        <div class="name-en">ChongqingShi YongchuanQu ChengshixiaoFang YuanChengJianKong XITong</div>
      </div>
    </div>
    <div class="fire-num">
      <ul class="num-list">
        <li class="num-item" v-for="(item,index) in num" :key="index">
          <span class="icon icon-top"></span>
          <span class="icon icon-bottom"></span>
          <span class="content">{{item}}</span>
        </li>
        次
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadTitle',
  data () {
    return {
      num: [0, 0, 0, 0, 9, 8, 8, 2, 5, 9]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .head
    width 1130px;
    height: 142px
    overflow: hidden
    display: flex
    align-content space-between
    justify-content space-between
    flex-direction column

    .title
      width 100%
      height: 80px
      display: flex
      justify-content space-between
      align-content: space-between;
      align-items: center;

      img
        height: 80px
        display inline-block
        justify-content center

      .title-name
        display: flex
        flex-direction: column
        justify-content: space-between;

        .name-ch
          font-size: 42px
          font-weight 600
          letter-spacing 5px

        .name-en
          font-size: 30px
          margin-top 5px

    .fire-num
      .num-list
        display flex
        justify-content flex-end
        align-items flex-end

        .num-item
          width: 28px
          height: 43px
          display: flex
          flex-direction column
          overflow: hidden
          position: relative
          justify-content space-between
          margin 0 3px

          .icon
            width 100%
            height: 20px
            background-color #15496e
            border 1px solid #107f9a

            &.icon-top
              border-radius 0 0 5px 5px

            &.icon-bottom
              border-radius 5px 5px 0 0
          .content
            position: absolute
            top 0
            right 0
            bottom 0
            left  0
            margin auto
            text-align: center
            line-height: 43px
            font-size 30px
            font-weight:600
</style>
