<template>
  <div class="ffs-player-table">
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
import { mapState } from 'vuex'

export default {
  name: 'PlayerTable',
  computed: mapState({
    players: state => state.players.all
  }),
  created () {
    this.$store.dispatch('players/getAllPlayers').then(playersDTO => {
      this.players = playersDTO
    })
  }
}
</script>
