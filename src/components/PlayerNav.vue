<template>
  <el-col class="ffs-player-nav">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button class="ffs-toggle-button" :label="!isCollapse">expand
      </el-radio-button>
    </el-radio-group>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
             :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-arrow-right"></i>
          <span slot="title">Navigator One</span>
        </template>
        <el-menu-item-group>
          <span slot="title">Group One</span>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">item four</span>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-arrow-right"></i>
        <span slot="title">Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-arrow-right"></i>
        <span slot="title">Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-arrow-right"></i>
        <span slot="title">Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  name: 'PlayerNav',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    background-color: #474444;
  }
  .ffs-toggle-button{
    background-color: #474444;
    color: #CB772F;
    width: 100%;
  }
</style>
