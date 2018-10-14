<template>
  <div class="ffs-player-table">
    {{ players }}
  <!--<el-table-->
      <!--:data="tableData4"-->
      <!--style="width: 100%">-->
    <!--<el-table-column-->
        <!--fixed-->
        <!--prop="date"-->
        <!--label="Date"-->
        <!--width="150">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
        <!--prop="name"-->
        <!--label="Name"-->
        <!--width="120">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
        <!--prop="state"-->
        <!--label="State"-->
        <!--width="120">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
        <!--prop="city"-->
        <!--label="City"-->
        <!--width="120">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
        <!--prop="address"-->
        <!--label="Address"-->
        <!--width="300">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
        <!--prop="zip"-->
        <!--label="Zip"-->
        <!--width="120">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
        <!--fixed="right"-->
        <!--label="Operations"-->
        <!--width="120">-->
      <!--<template slot-scope="scope">-->
        <!--<el-button-->
            <!--@click.native.prevent="deleteRow(scope.$index, tableData4)"-->
            <!--type="text"-->
            <!--size="small">-->
          <!--Remove-->
        <!--</el-button>-->
      <!--</template>-->
    <!--</el-table-column>-->
  <!--</el-table>-->
  </div>
</template>

<script>
import PlayerApi from '../services/api/PlayerApi'

export default {
  name: 'PlayerTable',
  data () {
    return {
      players: null
    }
  },
  mounted () {
    PlayerApi.getAllPlayers()
        .then(res => {
          this.players = res
        })
        .catch(err => {
          console.error('Error in Football: ', err)
        })
  }
}
</script>
