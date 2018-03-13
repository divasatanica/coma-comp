<template>
  <div class="layout-container-aside" :style="{width: width + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
/**
 * @author coma
 * @description 布局侧栏组件
 */

export default {
  props: {
    width: {
      type: Number,
      default: 200
    }
  }
}
</script>

<style>

</style>
