<template>
  <div class="layout-container-header">
    <slot></slot>
  </div>
</template>

<script>
/**
 * @author coma
 * @description 布局顶栏组件
 */

import mixin from './mix-layout'
export default {
  mixins: [mixin],
  data () {
    return {
      name: 'layout-header',
      isHeaderOrFooter: true
    }
  }
}
</script>

<style>
.layout-container-header {
  display: flex;
  width: 100%;
}
</style>
