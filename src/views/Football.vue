<template>
  <div class="football">
    <h3>Final Fantasy Football</h3>
    <!--<el-row :gutter="10">-->
    <!--<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">-->
    <!--<div class="grid-content bg-purple">-->
    <!--<PlayerNav/>-->
    <!--</div>-->
    <!--</el-col>-->
    <!--<el-col :xs="16" :sm="18" :md="20" :lg="21" :xl="24">-->
    <!--<div class="grid-content bg-purple-light">-->
    <HelloWorld />
    <PlayerTable/>
    <!--</div>-->
    <!--</el-col>-->
    <!--</el-row>-->
  </div>
</template>

<style>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>

<script>
import PlayerNav from '../components/PlayerNav'
import HelloWorld from '../components/HelloWorld'
import PlayerTable from '../components/PlayerTable'
export default {
  name: 'football',
  components: {
    PlayerTable,
    PlayerNav,
    HelloWorld
  }
}
</script>
