<template>
  <div class="football">
    <h3>Final Fantasy Football</h3>
    <PlayerTable />
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
import PlayerTable from '../components/PlayerTable'

export default {
  name: 'football',
  components: {
    PlayerTable
  }
}
</script>
