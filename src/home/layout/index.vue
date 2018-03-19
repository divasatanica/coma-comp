<template>
  <div id="component-root">
    <layout-container>
      <layout-header>
        <h1> FUCK you </h1>  
      </layout-header>
      <layout-container>
        <layout-aside>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </layout-aside>
        <layout-main>
          <div class="test" id="a"></div>
          <div class="test" id="b"></div>
          <div class="test" id="c"></div>
        </layout-main>
      </layout-container>
      <layout-footer>
        <h2> CopyRight @ coma</h2>
      </layout-footer>
    </layout-container>
  </div>
</template>

<script>
/**
 * @author coma
 */

import {layoutContainer, layoutHeader, layoutMain, layoutFooter, layoutAside} from './index.js'

export default {
  components: {
    layoutContainer,
    layoutHeader,
    layoutMain,
    layoutFooter,
    layoutAside
  }
  
}
</script>

<style>
.test {
  flex: 1;
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

