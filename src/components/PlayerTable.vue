<template>
  <div class="ffs-player-table">
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <table>
            <span v-for="(item, key) in props.row" v-if="formatStat(key, item)">
            <tr>
              <th>
                {{ key }}
              </th>
            </tr>
            <tr>
              <td>
                {{ item }}
              </td>
            </tr>
          </span>
          </table>
        </template>
      </el-table-column>
      <el-table-column
          prop="name"
          label="Name"
          sortable>
      </el-table-column>
      <el-table-column
          prop="position"
          label="Position"
          sortable>
      </el-table-column>
      <el-table-column
          prop="teamAbbr"
          label="Team"
          sortable>
      </el-table-column>
      <el-table-column
          prop="fantasyPoints"
          label="Fantasy Points"
          sortable>
      </el-table-column>
      <el-table-column
          prop="valueBaseDraftScore"
          label="Value Above Bench"
          sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import PlayerApi from '../services/api/PlayerApi'

  export default {
    name: "PlayerTable",
    props: {
      players: Array
    },
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
    },
    methods: {
      formatStat: function (key, item) {
        console.log('key: ', key)
        switch (key) {
          case "receivingYds":
            return item > 0
          case "returnYds":
            return item > 0
          case "rushingYds":
            return item > 0
          case "rushingTds":
            return item > 0
          case "receptions":
            return item > 0
          case "receivingTds":
            return item > 0
          case "fumblesLost":
            return item > 0
          case "twoPointCon":
            return item > 0
          case "offensiveFumbleReturnTds":
            return item > 0
          case "extraPoint":
            return item > 0
          case "fieldGoalsUnder40":
            return item > 0
          case "fieldGoals40_49":
            return item > 0
          case "getFieldGoalsOver50":
            return item > 0
          default:
            break
        }
        return this.formatDefenseStat(key, item)
      },
      formatDefenseStat: function (key, item) {
        switch(key) {
          case "defensiveSack":
            return item > 0
          case "defensiveInterception":
            return item > 0
          case "fumbleRecovery":
            return item > 0
          case "touchdown":
            return item > 0
          case "safety":
            return item > 0
          case "blockKick":
            return item > 0
          case "pointsAllowed":
            return item > 0
          case "pointsAllowed0":
            return item > 0
          case "pointsAllowed1_6":
            return item > 0
          case "pointsAllowed7_13":
            return item > 0
          case "pointsAllowed14_20":
            return item > 0
          case "pointsAllowed21_27":
            return item > 0
          case "pointsAllowed28_34":
            return item > 0
          case "pointsAllowedOver35":
            return item > 0
          case "ydsAllowed":
            return item > 0
          case "fourthDownStops":
            return item > 0
          case "extraPointReturned":
            return item > 0
          default:
            break
        }
        return false
      }
    }
  }
</script>
