<template>
  <div class="cm-radio-group">
    <slot></slot>
  </div>
</template>

<script>
/**
 * @author coma
 * @description 单选框组合
 */

export default {
  mounted () {
    this.$nextTick(() => {
      let arr = Array.from(this.$slots.default)
      for (let i = 0, len = arr.length; i < len; i ++) {
        if (arr[i].componentInstance) {
          arr[i].componentInstance.$on('change', this.listenChange)
          arr[i].componentInstance.$on('univer', this._handleChecked)
        }
      }
    })
  },
  props: {
    value: {

    }
  },
  methods: {
    _handleChecked (instance) {
      let arr = Array.from(this.$slots.default)
      let ele
      for (let i = 0, len = arr.length; i < len; i ++) {
        ele = arr[i].componentInstance
        if (ele) {
          ele.isChecked = false
          ele.$refs.main.checked = false
        }
      }
      instance.isChecked = true
      instance.$refs.main.checked = true
    },
    listenChange (v) {
      this.$emit('change', v)
      this.$emit('input', v)
    }
  }
}
</script>

<style>
.cm-radio-group {
  display: flex;
  line-height: 1;
  vertical-align: middle;
  align-items: center;
}
</style>
