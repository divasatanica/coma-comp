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
  mounted () {
    console.log(this._checkFooter(), this._checkHeader())
    if (this._checkFooter() || this._checkHeader()) {
      this.hasHeaderOrFooter = true
    }
  },
  data () {
    return {
      hasHeaderOrFooter: false
    }
  },
  methods: {
    _checkFooter () {
      let slots = Array.from(this.$slots.default)
      let result = false
      for (let i = 1, len = slots.length; i < len; i ++) {
        if (slots[i].tag && slots[i].tag.indexOf('vue-component') > -1) {
          result = true
        }
      }
      return result
    },
    _checkHeader () {
      return this.$slots.default[0].componentInstance.isHeaderOrFooter
    }
  }
}
</script>

<style>
.layout-container {
  display: flex;
}
</style>
