<template>
  <div class="layout-container" :style="{'flex-direction': hasHeaderOrFooter ? 'column' : 'row'}">
    <slot></slot>
  </div>
</template>

<script>
/**
 * @author coma
 * @description 布局容器
 */
export default {
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  mounted () {
    if (this._checkHeaderOrFooter() || this.direction === 'vertical') {
      this.hasHeaderOrFooter = true
    }
  },
  data () {
    return {
      name: 'layout-container',
      hasHeaderOrFooter: false
    }
  },
  methods: {
    _checkHeaderOrFooter () {
      let slots = Array.from(this.$slots.default)
      let result = false
      for (let i = 0, len = slots.length; i < len; i ++) {
        if (slots[i].componentInstance && slots[i].componentInstance.isHeaderOrFooter) {
          result = true
        }
      }
      return result
    }
  }
}
</script>

<style>
.layout-container {
  display: flex;
}
</style>
