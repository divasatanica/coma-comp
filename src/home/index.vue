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
        <button-group>
          <basic-button  
          :action="test"
          :loading="loading"
          iconClass="fa-upload"
          type="primary">Upload</basic-button>
          <basic-button iconClass="fa-plus">Add</basic-button>
          <basic-button iconClass="fa-thumbs-up">Upvote</basic-button>
        </button-group>
      </layout-footer>
    </layout-container>
  </div>
</template>

<script>
/**
 * @author coma
 * @description 组件库根容器
 */

import {layoutContainer, layoutHeader, layoutMain, layoutFooter, layoutAside} from './layout/index.js'
import {basicButton, buttonGroup} from './button/index.js'

export default {
  components: {
    layoutContainer,
    layoutHeader,
    layoutMain,
    layoutFooter,
    layoutAside,
    basicButton,
    buttonGroup
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    test () {
      console.log(1)
    }
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
