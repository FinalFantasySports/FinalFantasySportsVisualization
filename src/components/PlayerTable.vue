<template>
  <div class="ffs-player-table">
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="name"
          label="Name">
      </el-table-column>
      <el-table-column
          prop="position"
          label="Position">
      </el-table-column>
      <el-table-column
          prop="teamAbbr"
          label="Team">
      </el-table-column>
      <el-table-column
          prop="fantasyPoints"
          label="Fantasy Points">
      </el-table-column>
      <el-table-column
          prop="valueBaseDraftScore"
          label="Value Above Bench">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import PlayerApi from '../services/api/PlayerApi'

  export default {
    name: "PlayerTable",
    data () {
      return {
        tableData: []
      }
    },
    beforeMount: function() {
      PlayerApi.getAllPlayers()
        .then(res => {
          console.log('res: ', res)
          this.tableData = res
        })
        .catch(err => {
          console.error('Error in Football: ', err)
        })
    }
  }
</script>
