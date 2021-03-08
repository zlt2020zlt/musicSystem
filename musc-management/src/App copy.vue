<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <!-- <el-container> -->
          <el-main>Main</el-main>
        <!-- </el-container> -->
      </el-container>
      <el-footer>Footer</el-footer>

    </el-container>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <top></top>
    <index></index>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import top from './components/top.vue'
import index from './components/index.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    top,
    index
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
*{
  margin: 0;
  padding: 0;
}
</style>
