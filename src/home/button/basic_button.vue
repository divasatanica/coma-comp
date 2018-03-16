<template>
  <button class="basic-btn fa transition-03" 
  :class="{[`cm-button-${type}`]: true, 'is-disabled': disabled}"
  :disabled="disabled"
  >
    <i class="fa" :class="{[iconClass]: true}"></i>
    <slot></slot>
  </button>
</template>

<script>
/**
 * @author coma
 * @description 基本按钮组件
 */


export default {
  props: {
    iconClass: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      name: 'cm-button',
      colorMap: {

      }
    }
  }
}
</script>

<style lang="scss">

.basic-btn {
  padding: 0.4rem 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
}

.is-disabled {
  cursor: not-allowed;
}

@import './color_sets.scss';



</style>
