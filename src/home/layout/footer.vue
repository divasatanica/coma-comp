<template>
  <div class="layout-container-footer">
    <slot></slot>
  </div>
</template>

<script>
/**
 * @author coma
 * @description 布局底部组件
 */

import mixin from './mix-layout'
export default {
  mixins: [mixin],
  data () {
    return {
      name: 'layout-footer',
      isHeaderOrFooter: true
    }
  }
}
</script>

<style>
.layout-container-footer {
  display: flex;
  width: 100%;
}
</style>
