<template>
  <div class="customDate">
    <ul class="date year">
      <li class="year">{{dateCustom.dateObj.year}}</li>
      .
      <li class="month">{{dateCustom.dateObj.month}}</li>
      .
      <li class="day">{{dateCustom.dateObj.day}}</li>
    </ul>
    <ul class="date hour">
      <li class="hour">{{dateCustom.dateObj.hour}}</li>
      :
      <li class="minute">{{dateCustom.dateObj.minute}}</li>
      :
      <li class="second">{{dateCustom.dateObj.second}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CustomDate',
  data () {
    return {
      dateCustom: {
        dateObj: {}
      }
    }
  },
  mounted () {
    this.setDate()
  },
  methods: {
    setDate () {
      setInterval(() => {
        let date = new Date()
        let dateObj = {}

        dateObj.year = date.getFullYear()
        dateObj.month = date.getMonth() + 1
        dateObj.day = date.getDate()
        dateObj.hour = date.getHours()
        dateObj.minute = date.getMinutes()
        dateObj.second = date.getSeconds()
        this.$set(this.dateCustom, 'dateObj', dateObj)
      }, 1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .customDate
    display flex
    font-size 30px

    .date
      display flex
      &.year
        margin-right:18px
</style>
