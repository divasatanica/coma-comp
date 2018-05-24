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
    this.$forEachSlotChild((ele, root) => {
      if (root.disabled) {
        ele.isDisabled = true
      }
      ele.$on('change', root.listenChange)
      ele.$on('univer', root._handleChecked)
    })
  },
  props: {
    value: {

    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    _handleChecked (instance) {
      this.$forEachSlotChild((ele, root) => {
        ele.isChecked = false
        ele.$refs.main.checked = false
        instance.isChecked = true
        instance.$refs.main.checked = true
      })  
    },
    listenChange (v) {
      this.$emit('change', v)
      this.$emit('input', v)
    }
  },
  watch: {
    disabled () {
      this.$forEachSlotChild((ele, root) => {
        ele.isDisabled = root.disabled
      })
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
