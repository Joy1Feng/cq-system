<template>
  <div>
    <Message/>
    <Search/>
    <Table/>
  </div>
</template>

<script>
import Message from './components/Message/Message'
import Search from './components/Search/Search'
import Table from './components/Table/Table'
export default {
  name: 'LianWang',
  data () {
    return {

    }
  },
  components: {
    Message,
    Search,
    Table
  }
}
</script>

<style lang="stylus" scoped>

</style>
