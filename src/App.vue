<template>
  <div id="app">
    <div class="left-nav">
      <ul>
        <li class="nav-item"><a href="./layout">Layout 布局</a></li>
        <li class="nav-item"><a href="./button">Button 按钮</a></li>
      </ul>
    </div>
    <div class="right-block">
      <router-view/>
    </div>
  </div>
</template>

<script>

import './home/common/common.css'

export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  display: flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.left-nav {
  width: 15%;
  min-width: 120px;
  height: 100vh;
  background: #eaeaea;
  .nav-item {
    margin: 10px auto;
  }
}

.right-block {
  width: 85%;
  height: 100vh;
}
</style>
