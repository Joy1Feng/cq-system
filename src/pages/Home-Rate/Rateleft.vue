<template>
  <div class="cc-left">
    <div class="cc-top-ss">
      <i class='cc-panel iconfont icon-sousuo'></i>
      <input class="cc-so" placeholder="区域/单位搜索"/>
    </div>
    <div class="cc-bottom">
      <div class="cc-bottom-ss">
        <div class="cc-lists" @click="btn">
          <i class="cc-ti iconfont icon-jianhaoshouqi"></i>
          <p class="cc-text">用永川区</p>
        </div>
        <div class="cc-list-bottom">
          <ul class="cc-list-ul" v-show="isShow">
            <li class="cc-list-li" v-for="(item,index) in list" :key="index"><i
              class="cc-list-i iconfont icon-jiahaozhankai"></i>{{item}}
            </li>
          </ul>
        </div>
      </div>
      <div class="cc-to"></div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Rateleft",
      data(){
        return {
          isShow: true,
          list: ["卫星湖街道", "茶山竹海街道", "大安街道", "陈食街道", "胜利路街道", "南大街街道","卫星湖街道", "茶山竹海街道", "大安街道", "陈食街道", "胜利路街道", "南大街街道","卫星湖街道", "茶山竹海街道", "大安街道", "陈食街道", "胜利路街道", "南大街街道","卫星湖街道", "茶山竹海街道", "大安街道", "陈食街道", "胜利路街道", "南大街街道","卫星湖街道", "茶山竹海街道", "大安街道", "陈食街道", "胜利路街道", "南大街街道","卫星湖街道", "茶山竹海街道", "大安街道", "陈食街道", "胜利路街道", "南大街街道", "中山路街道", "朱沱镇"]
        }
      },
      methods: {
        btn() {
          console.log(111)
          this.isShow = !this.isShow;
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .cc-left
    width 1560px
    height 783px
    position relative
    top 194px
    left 323px
    .cc-bottom
      height 720px
      width 306px
      border 1px solid #666666
      margin-left 2px
      margin-top 6px
      background rgba(5, 24, 38, .5)
    .cc-top-ss
      background rgba(5, 24, 38, .5)
      width: 308px;
      height: 50px;
      color: rgba(255, 255, 255, .9);
      border: 20px solid transparent;
      border-image: url(http://www.imaoda.com/s/img/tpl/border.png) 10%;
      position relative
      .cc-panel
        //display block;
        float left
        font-size 30px
        position absolute
        top -8px
      .cc-so
        width 258px
        height 50px
        float left
        background-color transparent
        border 0
        position absolute
        top -20px
        outline none
        margin-left 46px
        color #ffffff
    .cc-to
      /*width 300px*/
      height 33px
      background rgba(3,93,104,.3)
    .cc-bottom-ss
      overflow-y scroll
      cursor pointer
      height 685px
    .cc-lists
      overflow hidden
      height 36px
      line-height 36px
      padding-left 9px
      .cc-ti
        color #ffffff
        float left
        margin-right 4px
      .cc-text
        color #ffffff
        float left
    .cc-list-bottom
      margin-left 25px
      .cc-list-ul
        .cc-list-li
          color #ffffff
          margin-right 4px
          margin-bottom 13px
          .cc-list-i
            color #ffffff
            margin-right 7px
</style>
