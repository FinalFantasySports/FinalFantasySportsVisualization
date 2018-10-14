<template>
  <div>
    <el-button @click="startHacking">Start</el-button>
  </div>
</template>

<script>
import PlayerApi from '../services/api/PlayerApi'

export default {
  name: 'HelloWorld',
  props: {
    players: Object
  },
  methods: {
    startHacking () {
      this.props.players = PlayerApi.getAllPlayers()
      console.log('Players: ', this.props.players)
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
