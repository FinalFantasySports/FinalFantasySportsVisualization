<template>
  <div class="ffs-player-table">

  </div>
</template>

<script>
  import PlayerApi from '../services/api/PlayerApi'

  export default {
    name: "PlayerTable",
    data: () => ({
      columns: [
        { title: 'Name', field: 'name', sortable: true },
        { title: 'Position', field: 'position', sortable: true  },
        { title: 'Team', field: 'teamAbbr', sortable: true  },
        { title: 'Return Yards', field: 'returnYds', sortable: true },
        { title: 'Return TD\'s', field: 'returnTds', sortable: true  },
        { title: 'Fantasy Points', field: 'fantasyPoints', sortable: true  },
        { title: 'Value Above Replacement', field: 'valueBaseDraftScore', sortable: true  }

      ],
      data: [],
      total: 0,
      query: {}
    }),
    beforeMount: function() {
      PlayerApi.getAllPlayers()
        .then(res => {
          console.log('res: ', res)
          this.data = res
        })
        .catch(err => {
          console.error('Error in Football: ', err)
        })
    }
  }

  // export default {
  //   name: 'PlayerTable',
  //   data () {
  //     return {
  //       players: null
  //     }
  //   },
  //   mounted () {
  //     PlayerApi.getAllPlayers()
  //         .then(res => {
  //           this.players = res
  //         })
  //         .catch(err => {
  //           console.error('Error in Football: ', err)
  //         })
  //   }
  // }
</script>
