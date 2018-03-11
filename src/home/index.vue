<template>
  <div id="component-root">
    <layout-container>
      <layout-header>
        <h1> FUCK you </h1>
      </layout-header>
      <div class="test" id="a"></div>
      <div class="test" id="b"></div>
      <div class="test" id="c"></div>
    </layout-container>
  </div>
</template>

<script>
/**
 * @author coma
 * @description 组件库根容器
 */

import {layoutContainer, layoutHeader} from './layout/index.js'

export default {
  components: {
    layoutContainer,
    layoutHeader
  }
}
</script>

<style>
.test {
  height: 500px;
}
#a {
  background-color: #f00;
}
#b {
  background-color: #0f0;
}
#c {
  background-color: #00f;
}
#d {
  background-color: #0ff;
}
</style>
